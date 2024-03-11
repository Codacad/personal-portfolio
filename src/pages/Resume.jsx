import React from "react";

const Resume = () => {
  return (
    <>
      <div className="w-[100%] bg-[#f4ece6] resume-container p-12 relative">
        <div className="content bg-white shadow-2xl border-r-10 min-h-[100vh] p-4 relative before:-content-[''] before:absolute before:top-0 before:left-0 before:w-[100px] before:h-[100px] before:border-l-4 before:border-t-4 before:border-blue-700 after:-content-[''] after:absolute after:bottom-0 after:right-0 after:w-[100px] after:h-[100px] after:border-r-4 after:border-b-4 after:border-blue-700">
          <div className="header flex justify-center">
            <h1 className="text-6xl relative text-gray-300 flex items-center uppercase after:content-[''] after:absolute after:-bottom-4 after:w-[100%] after:bg-blue-700">
              <span className="w-[28px] h-[28px] mt-1 bg-blue-700 mr-2 block"></span>
              <span>Resume</span>
            </h1>
          </div>
          <div className="resume grid grid-cols-3 mt-20 gap-6">
            <div className="summary bg-red-200 col-span-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              sapiente ut illum voluptas, odit voluptatibus cum dolorum placeat
              iusto sint fuga praesentium delectus architecto ipsum rerum iure,
              officiis cupiditate? Magni expedita illo inventore saepe velit
              quisquam consequuntur fuga neque quidem dolores suscipit officia a
              tempora quis, fugit ipsum eum voluptas omnis quod enim earum
              doloremque! Assumenda quisquam aliquid soluta quibusdam repellat!
              Mollitia distinctio natus nostrum esse error qui officia corporis
              perspiciatis deserunt ea fuga alias dolor illum, eum nisi, atque
              quasi sit, veritatis architecto? A repellendus, odio corrupti quis
              est eos veniam nisi iure non aliquam. Nam qui animi reprehenderit!
            </div>
            <div className="education bg-green-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              sapiente ut illum voluptas, odit voluptatibus cum dolorum placeat
              iusto sint fuga praesentium delectus architecto ipsum rerum iure,
              officiis cupiditate? Magni expedita illo inventore saepe velit
              quisquam consequuntur fuga neque quidem dolores suscipit officia a
              tempora quis, fugit ipsum eum voluptas omnis quod enim earum
              doloremque! Assumenda quisquam aliquid soluta quibusdam repellat!
              Mollitia distinctio natus nostrum esse error qui officia corporis
              perspiciatis deserunt ea fuga alias dolor illum, eum nisi, atque
              quasi sit, veritatis architecto? A repellendus, odio corrupti quis
              est eos veniam nisi iure non aliquam. Nam qui animi reprehenderit!
            </div>
            <div className="experience bg-blue-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              suscipit beatae commodi totam debitis dolore odio earum quo! Vero
              ad fugit sunt, omnis rem itaque a magni beatae accusantium soluta
              magnam consequuntur deleniti libero repudiandae ratione non at
              suscipit! Omnis magnam harum impedit nobis. Ipsam cumque quae ex
              aspernatur, provident nesciunt placeat nobis nostrum voluptatem!
              Quod sequi qui, architecto ex accusamus labore saepe repellendus
              tempora expedita asperiores quaerat esse libero pariatur omnis
              aliquam alias illo, facere, excepturi laborum! Ducimus est iusto
              consequatur, aperiam placeat nihil et, eos laboriosam nemo sit
              quasi? Dolorum alias autem incidunt assumenda nam eos praesentium
              consectetur.
            </div>
            <div className="skills bg-orange-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              cum, sequi ipsam provident unde error ducimus minus voluptatibus
              voluptate sunt aut porro accusamus ut reiciendis voluptas quam
              nobis id repellat tempora consequuntur! Repellendus quisquam nemo
              cum, neque quidem corrupti doloremque repellat ipsum ea. Quas
              repellendus dolorem eaque nihil architecto tempore! Qui, similique
              magnam maiores velit corporis sunt eius accusamus doloremque!
              Inventore, accusantium voluptatibus incidunt amet repellendus quis
              cupiditate aliquam dolore reprehenderit ratione facere quo, eaque
              dicta. Voluptatibus animi blanditiis ad hic pariatur sunt corrupti
              doloribus commodi, enim delectus, laudantium placeat quae
              suscipit. Non omnis culpa illum exercitationem, distinctio
              repellat praesentium?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
