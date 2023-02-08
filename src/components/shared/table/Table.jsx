import React from 'react'
import { MainTable } from './Style'

const Table = ({ columns, dataSource, page, size, total, loading }) => {
  return (
    <MainTable
      className='text-center'
      bordered
      dataSource={dataSource}
      rowKey={(record) => record.id}
      columns={columns}
      scroll={{ x: 1200 }}
      loading={loading}
      pagination={{
        pageSize: size,
        total,
        current: page
      }}
    />
  )
}

export default Table