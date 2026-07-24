import Accordion from "react-bootstrap/Accordion";

export default function AccordionFilter({
  allCatregoriesAPIs,
  handelFiltration,
  categoriesFilter,
}) {
  console.log(categoriesFilter);
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>All Categories</Accordion.Header>
        <Accordion.Body>
          {allCatregoriesAPIs?.map((category) => (
            <div className="flex justify-between items-center py-1">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={categoriesFilter?.categoryId === category.categoryId}
                  onChange={() => handelFiltration(category)}
                />
                <p className="m-0">{category.name}</p>
              </div>
              <p className="m-0">({category.books.length})</p>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Publisher</Accordion.Header>
        <Accordion.Body>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="m-0">Ramadan Farahat</p>
            </div>
            <div>
              <div>
                <p className="m-0">(30)</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="m-0">Ahmed Fawzy</p>
            </div>
            <div>
              <div>
                <p className="m-0">(20)</p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
