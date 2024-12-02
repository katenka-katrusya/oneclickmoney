import { useEffect, useRef } from 'react';
import btnStyles from '@/components/ui/button/styles.module.scss';
import s from './styles.module.scss';

const LinkFormat = ({ className, children }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = '; expires=' + date.toGMTString();
      document.cookie = name + '=' + value + expires + ';path=/';
    }

    function getCookie(name) {
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function getParam(p) {
      const match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    const yclid = getParam('yclid');

    if (yclid) {
      setCookie('yclid', yclid, 90);
    }

    const cookieYclid = getCookie('yclid');

    if (yclid || cookieYclid) {
      const yclidValue = yclid || cookieYclid;
      button.href = `https://oneclickmoney.ru/registration/first/?Resident&utm_source=yads_direct_partner&click_id=r99_y_${yclidValue}`;
    } else {
      window.ym(99032774, 'getClientID', function (clientID) {
        button.href = `https://oneclickmoney.ru/registration/first/?Resident&utm_source=yads_direct_partner&click_id=r99_c_${clientID}`;
      });
    }
  }, []);


  return (
    <a
      className={`${btnStyles.btn} ${s.link} ${className}`}
      id='linkButton'
      href='https://oneclickmoney.ru/registration/first/?Resident'
      ref={buttonRef}
    >
      {children}
    </a>
  );
};

export default LinkFormat;
