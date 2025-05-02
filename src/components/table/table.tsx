"use client";
import { useState, useEffect } from "react";
import { Box, Avatar } from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import type { GridRenderCellParams } from '@mui/x-data-grid';

type Product = {
  id: number;
  title: string;
  price: number;
  sale_price: number;
  image: string;
};

type Row = {
  id: number;
  title: string;
  price: number;
  min_price: number;
  max_price: number;
  image: string;
};

export default function ProductsTable() {
  const [rows, setRows] = useState<Row[]>([]);
  const [rowCount, setRowCount] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0, // 0-based index
    pageSize: 5,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://ecommerce.ahmedgamaldev.com/api/products", {
          params: {
            page: paginationModel.page + 1, // API uses 1-based index
            limit: paginationModel.pageSize,
          },
        });
  
        const data:Product[] = response.data.data.data;
        const pagination = response.data.data.pagination;
  
        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          min_price: item.price,
          max_price: item.sale_price,
          image: item.image,
        }));
  
        setRows(formatted);
        setRowCount(pagination.total);
      } catch (error) {
        console.error("فشل في جلب المنتجات", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [paginationModel.page, paginationModel.pageSize]);

  const columns = [
    {
      field: "id",
      headerName: "مسلسل",
      width: 80,
    },
    {
      field: "image",
      headerName: "صورة",
      width: 80,
      renderCell: (params:GridRenderCellParams) => (
        <Avatar src={params.value} variant="rounded" alt="صورة المنتج" />
      ),
      sortable: false,
      filterable: false,
    },
    { field: "title", headerName: "اسم المنتج", flex: 1 },
    { field: "price", headerName: "السعر", width: 120 },
    { field: "min_price", headerName: "أقل سعر", width: 120 },
    { field: "max_price", headerName: "أعلى سعر", width: 120 },
  ];

  return (
    <Box className="scroll" sx={{ width: "100%" }}>
      <div className="flex items-center justify-between mb-5 mr-1">
        <h2 className="text-gray-500 text-2xl font-bold">قائمة المنتجات</h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 4v16m8-8H4"/>
          </svg>
          إضافة
        </button>
      </div>

      <DataGrid
        rows={rows}
        columns={columns}
        rowCount={rowCount}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[1,5, 10]}
        localeText={{
          // General
          noRowsLabel: "لا توجد منتجات",
          noResultsOverlayLabel: "لم يتم العثور على نتائج",

          // Toolbar
          toolbarDensity: "الكثافة",
          toolbarDensityLabel: "الكثافة",
          toolbarDensityCompact: "ضيق",
          toolbarDensityStandard: "عادي",
          toolbarDensityComfortable: "مريح",

          toolbarColumns: "الأعمدة",
          toolbarColumnsLabel: "إظهار الأعمدة",

          toolbarFilters: "الفلاتر",
          toolbarFiltersLabel: "إظهار الفلاتر",
          toolbarFiltersTooltipHide: "إخفاء الفلاتر",
          toolbarFiltersTooltipShow: "إظهار الفلاتر",
          toolbarFiltersTooltipActive: count => `${count} فلتر مفعل`,

          toolbarExport: "تصدير",
          toolbarExportLabel: "تصدير",
          toolbarExportCSV: "تنزيل كملف CSV",
          toolbarExportPrint: "طباعة",

          // Pagination
          footerRowSelected: count => `${count.toLocaleString()} صف (صفوف) تم اختيارها`,
          footerTotalRows: "إجمالي الصفوف:",
        }}
        loading={loading}
      />
    </Box>
  );
}