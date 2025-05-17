import { Accordion, AccordionTitle, AccordionContent } from "@/components";
import { degrees, jobs } from "./data";

function Experience({ title, detail, accordions }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="text-2xl">{title}</div>
        <div>{detail}</div>
      </div>
      <div className="space-y-2">
        {accordions.map(({ title, content }, key) => (
          <Accordion key={key}>
            <AccordionTitle>{title}</AccordionTitle>
            <AccordionContent>{content}</AccordionContent>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="space-y-2">
      <div className="text-4xl">Education</div>
      {degrees.map(({ title, detail, accordions }, key) => (
        <Experience
          key={key}
          title={title}
          detail={detail}
          accordions={accordions}
        />
      ))}
    </div>
  );
}

function ProfessionalExperience() {
  return (
    <div className="space-y-2">
      <div className="text-4xl">Professional Experience</div>
      {jobs.map(({ title, detail, accordions }, key) => (
        <Experience
          key={key}
          title={title}
          detail={detail}
          accordions={accordions}
        />
      ))}
    </div>
  );
}

function Language() {
  return (
    <div className="space-y-2">
      <div className="text-4xl">Language</div>
      <ul className="list-disc list-inside">
        <li>Bahasa Indonesia: Native</li>
        <li>English: Professional (C1)</li>
        <li>German: Conversational (A2)</li>
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="mt-20 px-6 flex flex-col gap-6 mb-20">
      <div className="text-7xl">Jeremiah Bintang Santoso</div>
      <div>
        I am a software developer with professional experiences in full-stack
        web development and DevOps and an academic background in high
        performance software, computational physics, computational biology, and
        machine learning. <br /> <br />
        My current interest is in the field of bioinformatics due to my master
        thesis experience, thus searching for a PhD opportunity in the field.
      </div>
      <Education />
      <ProfessionalExperience />
      <Language />
    </div>
  );
}
