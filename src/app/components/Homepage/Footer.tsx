import Container from "../container/page";

const Footer = () => {
  return (
    <footer className="bg-transparent py-8">
      <Container classNames=" text-white py-4 px-6 flex justify-between items-center text-sm">
        <span>
          © 2025 <strong>Let's Summarize</strong>
        </span>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:underline"
        >
          <span>Explore our repository on</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2a10 10 0 0 0-3.162 19.5c.5.093.682-.217.682-.482 0-.238-.009-.868-.014-1.703-2.782.603-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.068-.607.068-.607 1.005.07 1.534 1.032 1.534 1.032.892 1.529 2.34 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.98 1.032-2.68-.103-.254-.448-1.272.099-2.65 0 0 .84-.27 2.75 1.025a9.635 9.635 0 0 1 2.5-.336c.85.004 1.705.115 2.5.336 1.91-1.295 2.75-1.025 2.75-1.025.548 1.378.203 2.396.1 2.65.644.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.685-4.57 4.93.36.31.68.92.68 1.86 0 1.345-.012 2.43-.012 2.76 0 .267.18.578.688.48A10.002 10.002 0 0 0 12 2z"
            />
          </svg>
            github
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
