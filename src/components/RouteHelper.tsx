import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function RouteHelper(): null {
  const history = useHistory();

  useEffect(() => {
    if (!history) return;

    function onClick(ev: MouseEvent) {
      const { href, target } = getLink(ev.target);

      if (!href) return;
      if (target != null && target !== '_self') return;

      const url = new URL(href, window.location.origin);

      if (url.origin !== window.location.origin) return;

      ev.preventDefault();

      if (window.location.href === url.href) {
        history.replace(`${url.pathname}${url.search}${url.hash}`);
      } else {
        history.push(`${url.pathname}${url.search}${url.hash}`);
      }
    }

    window.addEventListener('click', onClick);

    return () => window.removeEventListener('click', onClick);
  }, [history]);

  return null;
}

function getLink(target: EventTarget | null): { href: string | null; target: string | null } {
  while (target instanceof HTMLElement) {
    const href = target.getAttribute('href');

    if (href != null) {
      return { href, target: target.getAttribute('target') };
    }

    target = target.parentElement;
  }

  return { href: null, target: null };
}
