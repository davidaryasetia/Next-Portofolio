import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="container mx-auto">
      <div className="bg-primarygray flex rounded-lg">
        <div className="w-6/12 border-r border-primarygray-200 ">
          <div className="py-16 px-20">
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
        <div className="w-6/12">
          <form className="py-16 px-20">
            <div className="flex -mx-4">
              <div className="w-6/12 px-4">
                <Field type="text" label="Name" name="name" />
              </div>
              <div className="w-6/12 px-4">
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
