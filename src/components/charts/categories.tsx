import {
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';


const CategoriesPieChart=() => {
    const productCategories = [
        { name: 'الكترونيات', value: 400 },
        { name: 'ملابس', value: 300 },
        { name: 'أغذية', value: 300 },
        { name: 'أثاث', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    
    return (
        <>
        <h2 className="text-xl font-bold mb-4 text-gray-500">المنتجات حسب الفئة</h2>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={productCategories}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                >
                    {productCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
        </>
    )
}

export default CategoriesPieChart;