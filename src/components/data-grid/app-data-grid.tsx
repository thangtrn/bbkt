import clsx from 'clsx';
import type { Key } from 'react';
import { DataGrid, DataGridProps } from 'react-data-grid';
import { renderCheckbox } from './cell-renders';
import { EmptyRowsRenderer } from './empty-row';

type AppDataGridProps<R, SR = unknown, K extends Key = Key> = DataGridProps<
  R,
  SR,
  K
> & {
  fillGrid?: boolean;
};

const AppDataGrid = <R, SR = unknown, K extends Key = Key>(
  props: AppDataGridProps<R, SR, K>,
) => {
  const { fillGrid = false, className, ...rest } = props;

  return (
    <DataGrid
      {...rest}
      className={clsx(
        'app-data-grid',
        {
          'fill-grid': fillGrid,
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
