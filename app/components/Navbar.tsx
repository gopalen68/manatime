import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-screen h-16 bg-white border-b border-gray-200">
      <div className="py-3">
        <div className="flex items-center">
          <div className="flex w-[200px] items-center justify-center">
            <a href="#" className="flex items-center">
              <Image
                src="/img/Burgerbutton.svg"
                width={32}
                height={32}
                alt="Burger Menu"
              />
            </a>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center justify-items-start ml-[30px] space-x-[30px] font-poppins">
              <Image
                className=""
                src="/img/Absence_Icon.svg"
                width={38}
                height={38}
                alt="user photo"
              />
              <span className="text-2xl text-manatime_darker_grey">
                Absence
              </span>
              <Image
                src="/img/stripe2.svg"
                width={10}
                height={19}
                alt="user photo"
              />
              <Image
                className=""
                src="/img/Soldes.svg"
                width={26}
                height={23}
                alt="user photo"
              />
              <span className="text-lg text-[#858585]">Sous module</span>
              <Image
                className=""
                src="/img/stripe2.svg"
                width={10}
                height={19}
                alt="user photo"
              />
              <span className="text-base text-[#858585]">Sous sous module</span>
            </div>
            <div className="flex items-center justify-items-end space-x-[30px] mr-[30px] font-poppins">
              <div className="flex flex-row space-x-[10px]">
                <Image
                  className="rounded-full"
                  src="/img/Help.svg"
                  width={42}
                  height={42}
                  alt="user photo"
                />
                <Image
                  className="rounded-full"
                  src="/img/Settings.svg"
                  width={42}
                  height={42}
                  alt="user photo"
                />
              </div>
              <div className="inline-block h-full min-h-[2em] w-[1px] bg-[#858585]" />
              <div className="flex flex-col items-center font-poppins">
                <span className="text-base text-manatime_darker_grey">
                  Nom et Prénom
                </span>
                <span className="text-sm text-[#858585]">Entreprise</span>
              </div>
              <Image
                className="rounded-full"
                src="/img/Photo.png"
                width={42}
                height={42}
                alt="user photo"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
