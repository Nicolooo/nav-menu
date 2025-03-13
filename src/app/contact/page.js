'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const slideInFromLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
};

const slideInFromRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
};

const slideInFromBottom = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Here you would typically send the form data to your backend
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <main className={styles.contact}>
            <section className={styles.hero}>
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    CONTACT US
                </motion.h1>
            </section>

            <section className={styles.content}>
                <div className={styles.contactGrid}>
                    <motion.div 
                        className={styles.contactInfo}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <h2>GET IN TOUCH</h2>
                        <div className={styles.infoItems}>
                            <div className={styles.infoItem}>
                                <h3>ADDRESS</h3>
                                <p>Vake Plaza, Tbilisi, Georgia</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>PHONE</h3>
                                <p>+995 XXX XXX XXX</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>EMAIL</h3>
                                <p>info@vakeplaza.ge</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>WORKING HOURS</h3>
                                <p>Monday - Friday: 9:00 - 18:00</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form 
                        className={styles.contactForm}
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        onSubmit={handleSubmit}
                    >
                        <div className={`${styles.formGroup} ${errors.name ? styles.error : ''}`}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                        </div>
                        <div className={`${styles.formGroup} ${errors.email ? styles.error : ''}`}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                        </div>
                        <div className={`${styles.formGroup} ${errors.subject ? styles.error : ''}`}>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            {errors.subject && <span className={styles.errorMessage}>{errors.subject}</span>}
                        </div>
                        <div className={`${styles.formGroup} ${errors.message ? styles.error : ''}`}>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                disabled={isSubmitting}
                            />
                            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                        </div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                        </button>
                        {submitStatus === 'success' && (
                            <motion.p 
                                className={styles.successMessage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                Message sent successfully!
                            </motion.p>
                        )}
                        {submitStatus === 'error' && (
                            <motion.p 
                                className={styles.errorMessage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                Failed to send message. Please try again.
                            </motion.p>
                        )}
                    </motion.form>
                </div>

                <motion.div 
                    className={styles.map}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1876893920247!2d44.7528!3d41.7054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzE5LjQiTiA0NMKwNDUnMTAuMSJF!5e0!3m2!1sen!2sge!4v1620000000000!5m2!1sen!2sge"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </section>
        </main>
    );
} 