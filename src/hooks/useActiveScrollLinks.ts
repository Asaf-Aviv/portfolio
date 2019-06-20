import { useEffect } from 'react';
import capitalize from 'lodash.capitalize';
import throttle from 'lodash.throttle';

const useActiveScrollLinks = () => {
  useEffect(() => {
    const links: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.nav__link');

    const checkActiveLink = throttle(() => {
      links.forEach((link) => {
        const fromTop = window.scrollY;
        const sectionName = link.href.split('#')[1];
        const section = document.getElementById(sectionName)!;
        const inView = section.offsetTop <= fromTop
          && section.offsetTop + section.offsetHeight > fromTop;

        if (inView) {
          link.classList.add('nav__link--active');
          window.history.pushState({}, `Asaf Aviv | ${capitalize(sectionName)}`, link.href);
        } else {
          link.classList.remove('nav__link--active');
        }
      });
    }, 50);

    window.addEventListener('scroll', checkActiveLink);
    checkActiveLink();
  }, []);
};

export default useActiveScrollLinks;
