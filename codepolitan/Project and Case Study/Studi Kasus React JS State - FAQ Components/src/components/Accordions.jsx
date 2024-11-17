import AccodionItem from "./AccordionItem";
import { useState } from "react";

function Accordion({ data }) {
	const [curOpen, setIsOpen] = useState(null);

	return (
		<>
			<div className="accordion">
				{data.map((faq, index) => (
					<AccodionItem
						number={index + 1}
                        curOpen={curOpen}
                        onOpen={setIsOpen}
						question={faq.question}
						answer={faq.answer}
						key={index}
					/>
				))}
			</div>
		</>
	);
}

export default Accordion;
