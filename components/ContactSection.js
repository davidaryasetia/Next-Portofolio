import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-10 2xl:px-0" id="contact">
      <div className="bg-primarygray flex flex-wrap rounded-lg">
        <div className="md:w-6/12 w-full md:border-r border-primarygray-200 border-b">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>
              Beberapa cara menghubungi saya
            </SectionParagraph>
            <ContactItem
              label="Mail"
              icon="email.svg"
              value="david.aryasetia@gmail.com"
              className="mt-10"
            />
            <ContactItem
              label="Phone"
              icon="phone.svg"
              value="082232668794"
              className="mt-6"
            />
            <ContactItem
              label="Twitter"
              icon="twitter.svg"
              value="@davidaryasaetia"
              className="mt-6"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-4">
                <Field type="text" label="Name" name="name" />
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <Field type="text" label="Email" name="email" />
              </div>
            </div>

            <Field type="text" label="Subjek" name="subjek" />
            <Field
              type="textarea"
              label="Message"
              name="message"
              className="h-40"
            />
            <div className="text-right">
              <Button variant="black" className="mt-14">
                Pelajari
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
