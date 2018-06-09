import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  province: string;
  birthday: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 1, firstName: 'Hydrogen', lastName: 'Johnson', city: 'Vancouver', province: 'BC', birthday: '08/25/1992'},
  {id: 2, firstName: 'Helium', lastName: 'Smith', city: 'Victoria', province: 'BC', birthday: '03/12/1987'},
  {id: 3, firstName: 'Beryllium', lastName: 'NOTOkay3', city: 'Toronto', province: 'ON', birthday: '11/10/1982'},
  {id: 4, firstName: 'Boron', lastName: 'OK22', city: 'Salt Lake City', province: 'UT', birthday: '09/02/1978'},
  {id: 5, firstName: 'Carbon', lastName: 'Tom2', city: 'Denver', province: 'CO', birthday:'04/25/1945'},
  {id: 6, firstName: 'Nitrogen', lastName: 'Mary', city: 'Dallas', province: 'TX', birthday: '10/25/1990'},
  {id: 7, firstName: 'Oxygen', lastName: 'Building', city: 'Austin', province: 'TX', birthday: '11/25/2000'},
  {id: 8, firstName: 'Neon', lastName: 'Poor', city: 'San Diego', province: 'CA', birthday: '12/28/1945'},
  {id: 9, firstName: 'Magnesium', lastName: 'Rich', city: 'Kansas City', province: 'KS', birthday: ''},
  {id: 10, firstName: 'Magnesium', lastName: 'Esium', city: 'Miami', province: 'FL', birthday: '01/13/1987'},
  {id: 11, firstName: 'Lithium', lastName: 'Ium', city: 'Calgary', province: 'AB', birthday: '02/06/1988'},
  {id: 12, firstName: 'Terry', lastName: 'Button', city: 'New York', province: 'NY', birthday: '07/03/1956'}
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'lastName': return compare(a.lastName, b.lastName, isAsc);
        case 'city': return compare(a.city, b.city, isAsc);
        case 'province': return compare(a.province, b.province, isAsc);
        case 'birthday': return compare(a.birthday, b.birthday, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
