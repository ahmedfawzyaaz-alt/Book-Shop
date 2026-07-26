export default function OurMission({ cardAbout }) {
    console.log(cardAbout)
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="border p-4 rounded  my-3 transition duration-300 hover:scale-105 cursor-pointer">
        <h4 className="text-[#222222]">{cardAbout.name}</h4>
        <p className="text-[#22222280]">{cardAbout.desc}</p>
        <small className="text-[#D9176C]">{cardAbout.BTN}</small>
      </div>
    </div>
  );
}
