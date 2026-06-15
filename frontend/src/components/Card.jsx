function Card({ title, description }) {
  return (
    <div className="border rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-3">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default Card;