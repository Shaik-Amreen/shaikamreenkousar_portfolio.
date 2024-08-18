import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "./reusable/styles";
import { zoomIn } from "./reusable/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [emailStatus, setEmailStatus] = useState('Send')


    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setEmailStatus("Sending...")
        emailjs
            .send(
                'service_kez1h7i',
                'template_uxz9xbf',
                {
                    from_name: form.name,
                    to_name: "Shaik Amreen Kousar",
                    from_email: form.email,
                    to_email: "shaikamreenkousar@gmail.com",
                    message: form.message,
                },
                { publicKey: 'jz9yQYm-QSbfpTR9D' }
            )
            .then(
                () => {
                    setLoading(false);
                    // alert("Thank you. I will get back to you as soon as possible.");
                    setEmailStatus("Thank you for your time 😃. I will get back to you as soon as possible.")

                    setTimeout(() => {
                        setEmailStatus("Send")
                    }, 1000)
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div
            className={`mx-5 md:mx-20 text-center mt-10 `}
        >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>

            <motion.div
                variants={zoomIn()}
                initial="hidden"
                whileInView="show"
            >
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-8 text-left md:px-32'
                >
                    <label className='flex flex-col'>
                        <span className='text-white mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-transparent shadow py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-slate-700'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-transparent shadow py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-slate-700'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white mb-4'>Your Message</span>
                        <textarea
                            rows={5}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-transparent shadow py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-slate-700'
                        />
                    </label>

                    <button
                        type='submit'
                        className='-mt-4 bg-white shadow py-3 px-8 mb-5 rounded-xl outline-none w-fit  text-slate-900'
                    >
                        {emailStatus}
                    </button>
                </form>
            </motion.div>


        </div>
    );
};

export default Contact;
