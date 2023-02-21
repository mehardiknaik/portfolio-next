

function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();

  return (
    <div className='mt-4 flex flex-col items-center py-8 font-light dark:text-white lg:py-8'>
      {/* <SocialIcons /> */}
      <span className='mt-4 text-xs font-light lg:mt-8'>
        &copy; {year} Hardik Naik
      </span>
    </div>
  );
}

export default Footer;