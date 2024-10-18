import { useState, useEffect } from 'react';
import Icon from '../Global/Icon/Icon';
import './Footer.css';

export default function Footer() {
    const iconData = [
        { image: './images/general/footer-part/acm.webp' },
        { image: './images/general/footer-part/kdd.webp' },
        { image: './images/general/footer-part/srm.webp' },
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="container-footer">
                <div className='footer-nav'>
                    <ul>
                        <li><a href="https://www.instagram.com/srmsigkdd">INSTAGRAM</a></li>
                        |
                        <li><a href="https://www.linkedin.com/company/acmsigkddsrm">LINKEDIN</a></li>
                        |
                        <li><a href="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER">GITHUB</a></li>
                        |
                        <li>
                            <a href="https://www.srmist.edu.in/department/department-of-data-science-and-business-systems/srm-sig-kdd-students-chapter/">
                                {isMobile ? 'SRM' : 'SRM WEBSITE'}
                            </a>
                        </li>
                        |
                        <li><a href="https://x.com/srmsigkdd">TWITTER</a></li>
                    </ul>
                </div>
                <div className='footer-icons'>
                    <div className='left-icons'>
                        <Icon {...iconData[0]} />
                        <Icon {...iconData[1]} />
                        <Icon {...iconData[2]} />
                    </div>
                    <div className='right-icons'>
                        <img src="./icons/acmfull.webp" alt="logo" className='img-icon1' />
                    </div>
                </div>
                <div className='footer-detail'>
                    <span>© 2024 Hack of Duty. SRMIST ACM SIGKDD Student Chapter</span>
                </div>
            </div>
        </>
    );
}
