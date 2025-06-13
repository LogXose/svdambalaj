import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Sprey Valf Dünyası — Yetkin sprey ve valf tedarikçiniz
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            <Image
              src="/logo.svg"
              alt="Sprey Valf Dünyası Logo"
              width={120}
              height={48}
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo.svg"
          alt="Sprey Valf Dünyası Logo"
          width={360}
          height={120}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {[
          'Parmak spreyler',
          'Losyon pompaları',
          'Krem pompaları',
          'Medikal spreyler',
          'Damlalıklar',
          'Tetikli spreyler',
          'Köpük pompaları',
          'Şişeler',
          'Diğer kapaklar',
        ].map((category, idx) => {
          const imagePath =
            `/` +
            category
              .toLowerCase()
              .replace(/ç/g, 'c')
              .replace(/ş/g, 's')
              .replace(/ı/g, 'i')
              .replace(/ö/g, 'o')
              .replace(/ü/g, 'u')
              .replace(/ğ/g, 'g')
              .replace(/ /g, '-') +
            `.png`;
          return (
            <div
              key={idx}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={imagePath}
                  alt={category + ' görseli '}
                  width={120}
                  height={40}
                  className="rounded"
                />
                <h2 className="text-2xl font-semibold">
                  {category}{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
              </div>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {category} hakkında detaylı bilgi için tıklayın.
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
