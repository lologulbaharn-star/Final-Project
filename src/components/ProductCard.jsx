const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img src={product?.images[0]} alt={product?.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{product?.title}</h3>
        <p className="text-gray-600 text-sm h-10 overflow-hidden">{product?.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 font-bold">${product?.price}</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
            إضافة للسلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;