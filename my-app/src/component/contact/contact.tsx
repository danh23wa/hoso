import { motion } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";
import { useInView } from 'react-intersection-observer';
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const contact = [
  { name: "Địa chỉ:", icon: faLocationDot, body: "Đông hoà, Dĩ An, Bình Dương" },
  { name: "Điện thoại:", icon: faPhone, body: "0345 198 260" },
  { name: "Email:", icon: faEnvelope, body: "nguyendanh2147@gmail.com" },
];

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div>
      <div id="Contact" className="d-flex flex-column justify-content-center align-items-center m-4">
        <p className="display-6 text-center">Liên hệ với tôi</p>
        <p className="display-7 text-center">Bạn có thể liên hệ với tôi bất cứ lúc nào</p>
      </div>

      <div className="container">
        <div className="row">
          <motion.div
            ref={ref}
            className="col-md-6 d-flex flex-column justify-content-center align-items-start mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h4 className="display-6">Thông tin liên hệ</h4>
            {contact.map((item, index) => (
              <h5 key={index} className="skill-name m-3">
                <FontAwesomeIcon icon={item.icon} className="me-2" />
                {item.name} {item.body}
              </h5>
            ))}
          </motion.div>

          <motion.div
            ref={ref}
            className="col-md-6 d-flex flex-column justify-content-center align-items-start mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <form>
              <h4 className="display-6">Gửi tin nhắn cho tôi</h4>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Họ và tên" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Tin nhắn của bạn" />
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;