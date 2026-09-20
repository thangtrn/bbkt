import clsx from 'clsx';
import { useMemo, type Key } from 'react';
import { DataGrid, DataGridProps } from 'react-data-grid';
import { renderCheckbox } from './cell-renders';
import { EmptyRowsRenderer } from './empty-row';
import { AppColumnOrColumnGroup } from './app-data-grid.type';

type AppDataGridProps<R, SR = unknown, K extends Key = Key> = DataGridProps<
  R,
  SR,
  K
> & {
  columns: readonly AppColumnOrColumnGroup<R, SR>[];
  gridType?: 'fill' | 'fix';
};

const AppDataGrid = <R, SR = unknown, K extends Key = Key>(
  props: AppDataGridProps<R, SR, K>,
) => {
  const { gridType, className, columns, ...rest } = props;

  const internalColumns = useMemo<AppColumnOrColumnGroup<R, SR>[]>(() => {
    const processColumns = (
      cols: readonly AppColumnOrColumnGroup<R, SR>[],
    ): AppColumnOrColumnGroup<R, SR>[] => {
      return cols.map((col) => {
        // for group
        if ('children' in col) {
          return {
            ...col,
            children: processColumns(col.children),
          };
        }

        const cellClassName = clsx(col.cellClass, {
          'text-center': col.textAlign === 'center',
          'text-right': col.textAlign === 'right',
        });

        return {
          ...col,
          cellClass: cellClassName,
        };
      });
    };

    return processColumns(columns);
  }, [columns]);

  return (
    <DataGrid
      rowHeight={30}
      columns={internalColumns}
      {...rest}
      className={clsx(
        'app-data-grid',
        {
          'fill-grid': gridType === 'fill',
        },
        className,
      )}
      renderers={{
        noRowsFallback: <EmptyRowsRenderer />,
        renderCheckbox,
      }}
    />
  );
};

export default AppDataGrid;
