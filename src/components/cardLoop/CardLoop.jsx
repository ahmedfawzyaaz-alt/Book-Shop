export default function CardLoop({ cardBodyText }) {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 px-4">
      <div className="card border-0 p-3 my-3">
        <span className="text-[#22222280]">
          <h3>{cardBodyText.icone}</h3>
        </span>
        <h4>{cardBodyText.title}</h4>
        <span className="text-[#22222280] line-clamp-4">
          <p>{cardBodyText.description}</p>
        </span>
      </div>
    </div>
  );
}
