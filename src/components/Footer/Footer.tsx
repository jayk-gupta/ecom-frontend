import { Link } from "react-router-dom";
import { toast } from "sonner";
import {z} from "zod"
import { FormInput } from "../ui/custom/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
const linkStyle = "hover:text-[#EB008B]";
const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"), // Example validation
});
type SubscribeFormData = z.infer<typeof subscribeSchema>;

function Footer() {

  const onSubmit = (data: SubscribeFormData) => {
    // Only runs if validation passes
    console.log("Form data:", data);
    toast("Subscribed successfully");
  };

  const form = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <footer className="mt-12 lg:px-48 lg:pt-12 flex flex-col bg-secondary md:p-6 sm:py-6 py-2 bg-[#FFEAF6]">
      <div className="flex pb-12 sm:flex-col md:flex-row sm:items-center flex-col gap-12 items-center">
        {/* Subscribe Section */}
        <section className="flex flex-col sm:gap-6 gap-4 lg:w-[40rem] md:w-1/2 px-12">
          <h3 className="text-2xl font-bold">Get 15% OFF</h3>
          <p>Your first order & get our latest promotions!</p>
          <div className="flex flex-col gap-4 items-start">
            <Form {...form}>
              <FormInput
                name="email"
                type="email"
                className="w-full"
                inputClassName=" lg:p-4 w-full h-12 bg-white"
                label=""
                form={form}
                placeholder="Enter your email"
              />
            </Form>
            <button
              className="bg-[#EB008B] hover:cursor-pointer  hover:bg-[#ff029e] w-full lg:p-4 p-2 text-white font-bold uppercase"
              onClick={form.handleSubmit(onSubmit)}
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm w-full">
            By subscribing to Glam Luv Cosmetics, you agree to receive marketing
            messages and understand your information will be collected and used
            subject to our Privacy Policy and Terms of Use. You may unsubscribe
            at any time.
          </p>
        </section>

        {/* Links Section */}
        <section className="flex lg:gap-32 md:gap-6 sm:gap-12 sm:mt-6 flex-col items-center gap-12 md:flex-row md:items-start">
          <div>
            <h4 className="font-bold text-xl mb-4 text-center">
              Customer Service
            </h4>
            <ul className="flex flex-col gap-2 items-center ">
              <Link to="/contact" className={linkStyle}>
                Contact Us
              </Link>
              <Link to="" className={linkStyle}>
                Shipping Policy
              </Link>
              <Link to="" className={linkStyle}>
                Return Policy
              </Link>
              <Link to="/faq" className={linkStyle}>
                FAQs
              </Link>
              <Link to="/account " className={linkStyle}>
                My Account
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-center">Explore</h4>
            <ul className="flex flex-col gap-2 items-center">
              <Link to="/about" className={linkStyle}>
                Our Story
              </Link>
              <Link to="" className={linkStyle}>
                Join Our Team
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-center">Featured</h4>
            <ul className="flex flex-col gap-2 items-center">
              <Link to="/products" className={linkStyle}>
                Eyeshadow Collections
              </Link>
              <Link to="/products" className={linkStyle}>
                Best Sellers
              </Link>
              <Link to="/products" className={linkStyle}>
                New Arrivals
              </Link>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center gap-2">
        <ul className="border-y-[0.1px] border-gray-400 sm:py-4 w-full flex justify-center text-[0.8rem] py-2 px-4 gap-4 sm:text-sm">
          <Link to="" className={linkStyle}>
            Privacy Policy
          </Link>
          <Link to="" className={linkStyle}>
            Terms & Conditions
          </Link>
          <Link to="" className={linkStyle}>
            Terms of Use
          </Link>
          <Link to="" className={linkStyle}>
            Terms of Service
          </Link>
          <Link to="" className={linkStyle}>
            Legal Disclaimer
          </Link>
        </ul>
        <div className="flex flex-col items-center">
          {/* Add Social Media Icons Here */}
          <div className="">{/* Icons can go here */}</div>
          <p className="sm:text-sm text-[0.6rem]">
            © 2024 GLAM LUV COSMETICS. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
