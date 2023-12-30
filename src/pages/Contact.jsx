import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import {OrbitControls, Preload } from "@react-three/drei";
import useAlert from "../hooks/useAlert";
import Loader from "../components/Loader.jsx"
import Alert from "../components/Alert.jsx"
import StarsCanvas from "../models/Stars.jsx";
import {useGLTF} from "@react-three/drei";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");
    const earth = useGLTF("./planet/scene.gltf");

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleFocus = () => setCurrentAnimation("walk");
    const handleBlur = () => setCurrentAnimation("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation("hit");

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "JavaScript Mastery",
                    from_email: form.email,
                    to_email: "sujata@jsmastery.pro",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: "Thank you for your message 😃",
                        type: "success",
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setCurrentAnimation("idle");
                        setForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    }, 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    setCurrentAnimation("idle");

                    showAlert({
                        show: true,
                        text: "I didn't receive your message 😢",
                        type: "danger",
                    });
                }
            );
    };

    return (
        <div id='kittu' className='m-0'>
            <div className={'z-30'}>
                <NavBar color='black'/>
            </div>
            <StarsCanvas/>
        <section className='relative flex lg:flex-row  z-10 flex-col max-container '>
            {alert.show && <Alert {...alert} />}

            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text text-blue-800 '>Get in <span className='text-[#915EFF]'>Touch</span></h1>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='w-full flex flex-col gap-7 mt-14'
                >
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                            type='text'
                            name='name'
                            className='input'
                            placeholder='John'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                            type='email'
                            name='email'
                            className='input'
                            placeholder='John@gmail.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Your Message
                        <textarea
                            name='message'
                            rows='4'
                            className='textarea'
                            placeholder='Write your thoughts here...'
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <button
                        type='submit'
                        disabled={loading}
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>

            <div className='lg:w-[55%] w-full lg:ml-25 z-0 lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas className="lg:ml-28"
                        shadows
                        frameloop='demand'
                        dpr={[1, 2]}
                        gl={{ preserveDrawingBuffer: true }}
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            position: [-4, 3, 6],
                        }}
                >
                    <directionalLight position={[0, 0, 1]} intensity={2.5} />
                    <ambientLight intensity={1} />
                    <pointLight position={[5, 10, 0]} intensity={2} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />

                    <Suspense fallback={<Loader/>}>
                    <Suspense fallback={<Loader />}>
                        <OrbitControls
                            autoRotate
                            enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                        />
                        <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
                        <Preload all />
                    </Suspense>
                    </Suspense>
                </Canvas>
            </div>
        </section>
        </div>
    );
};

export default Contact;