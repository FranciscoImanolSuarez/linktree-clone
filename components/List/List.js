import useSwr from "swr";
import Link from "next/link";
import style from './List.module.css';

export default function List({ links }) {

  return (
    <main>
      <li>
        <a target="_blank"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `${links.url}`;
          }} className={style.link}>{links.name}</a>
      </li>
    </main>
  );
}
