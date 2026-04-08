type MenuItem = {
  title: string;
  description: string;
  price: number;
  tag: string;
};

const menu: MenuItem[] = [
  {
    title: "Неоновый боул с лососем",
    description: "Лосось, авокадо, рис, огурец, соус юдзу-майо.",
    price: 590,
    tag: "Хит",
  },
  {
    title: "Пицца ‘Вулкан’",
    description: "Пепперони, моцарелла, халапеньо, томатный соус.",
    price: 690,
    tag: "Острый",
  },
  {
    title: "Бургер ‘Смэш’",
    description: "Двойная котлета, сыр, маринованный лук, фирменный соус.",
    price: 520,
    tag: "Сочно",
  },
  {
    title: "Паста с трюфелем",
    description: "Сливочный соус, пармезан, трюфельное масло.",
    price: 640,
    tag: "Премиум",
  },
  {
    title: "Салат ‘Хрустящий’",
    description: "Цезарь-микс, курица, сухарики, соус на йогурте.",
    price: 420,
    tag: "Лайт",
  },
  {
    title: "Десерт ‘Карамельный шторм’",
    description: "Чизкейк, солёная карамель, хрустящий топпинг.",
    price: 360,
    tag: "Сладко",
  },
];

const lebronBgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg";

const lebronButtonClassName =
  "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black/20 px-7 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300/60";

const lebronButtonStyle = {
  backgroundImage: `url(${lebronBgUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
} as const;

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-50">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-140px] h-[520px] w-[520px] rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <span className="text-sm font-semibold tracking-tight">P</span>
          </span>
          <span className="text-base font-semibold tracking-tight">Pololo</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-200 md:flex">
          <a className="hover:text-white" href="#menu">
            Меню
          </a>
          <a className="hover:text-white" href="#how">
            Как это работает
          </a>
          <a className="hover:text-white" href="#order">
            Заказать
          </a>
        </nav>

        <a
          href="#order"
          className={`${lebronButtonClassName} h-10 px-5`}
          style={lebronButtonStyle}
        >
          <span className="relative z-10">Заказать</span>
        </a>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-20">
        <section className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Доставка по городу за 30 минут
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Яркая еда. Быстрый заказ. Ноль лишних кликов.
            </h1>

            <p className="max-w-xl text-pretty text-base leading-7 text-zinc-200">
              Собирай корзину из хитов и новинок, выбирай удобное время и оплачивай
              в один тап. Мы привезём горячим.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#order"
                className={`${lebronButtonClassName} h-12`}
                style={lebronButtonStyle}
              >
                <span className="relative z-10">Заказать сейчас</span>
              </a>
              <a
                href="#menu"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-7 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                Смотреть меню
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-4 pt-4 text-sm">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-lg font-semibold">4.9</div>
                <div className="text-zinc-300">рейтинг</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-lg font-semibold">15–30</div>
                <div className="text-zinc-300">минут</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-lg font-semibold">0 ₽</div>
                <div className="text-zinc-300">доставка от</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="grid gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500/15 to-cyan-400/10 p-5 ring-1 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-zinc-200">Сегодня в тренде</div>
                      <div className="text-lg font-semibold">Неоновый боул</div>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/15">
                      -20%
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                    <div className="text-sm text-zinc-300">Сборка заказа</div>
                    <div className="mt-1 text-lg font-semibold">3 минуты</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                    <div className="text-sm text-zinc-300">Курьер в пути</div>
                    <div className="mt-1 text-lg font-semibold">12 минут</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="py-10 md:py-14">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">1. Выбирай</div>
              <div className="mt-2 text-sm leading-6 text-zinc-200">
                Добавляй блюда в корзину из меню — хиты, новинки и комбо.
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">2. Оплачивай</div>
              <div className="mt-2 text-sm leading-6 text-zinc-200">
                Карта или наличные — как удобно. Подтверждение в один шаг.
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">3. Получай</div>
              <div className="mt-2 text-sm leading-6 text-zinc-200">
                Трекай курьера и встречай заказ горячим. Привезём быстро.
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-10 md:py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Меню
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-200">
                Подборка любимых позиций — то, что чаще всего заказывают сегодня.
              </p>
            </div>
            <a
              href="#order"
              className="hidden h-10 items-center justify-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 md:inline-flex"
            >
              Перейти к заказу
            </a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-base font-semibold tracking-tight">
                    {item.title}
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/15">
                    {item.tag}
                  </div>
                </div>
                <div className="mt-3 text-sm leading-6 text-zinc-200">
                  {item.description}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">
                    {item.price} ₽
                  </div>
                  <a
                    href="#order"
                    className={`${lebronButtonClassName} h-10 px-5`}
                    style={lebronButtonStyle}
                  >
                    <span className="relative z-10">Заказать</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="order" className="py-10 md:py-14">
          <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-6 ring-1 ring-white/10 md:p-10">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Быстрый заказ
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-200">
                  Оставь контакты — мы уточним детали, адрес и удобное время.
                </p>

                <div className="mt-6 space-y-3 text-sm text-zinc-200">
                  <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
                    Оплата: карта / наличные
                  </div>
                  <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
                    Среднее время: 15–30 минут
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <div className="text-xs font-semibold text-zinc-200">
                      Имя
                    </div>
                    <input
                      name="name"
                      placeholder="Алекс"
                      className="h-12 w-full rounded-2xl bg-white/10 px-4 text-sm text-white placeholder:text-zinc-400 ring-1 ring-white/15 outline-none focus:ring-2 focus:ring-cyan-300/60"
                    />
                  </label>
                  <label className="space-y-2">
                    <div className="text-xs font-semibold text-zinc-200">
                      Телефон
                    </div>
                    <input
                      name="phone"
                      placeholder="+7 (999) 000-00-00"
                      className="h-12 w-full rounded-2xl bg-white/10 px-4 text-sm text-white placeholder:text-zinc-400 ring-1 ring-white/15 outline-none focus:ring-2 focus:ring-cyan-300/60"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <div className="text-xs font-semibold text-zinc-200">
                    Адрес
                  </div>
                  <input
                    name="address"
                    placeholder="Улица, дом, квартира"
                    className="h-12 w-full rounded-2xl bg-white/10 px-4 text-sm text-white placeholder:text-zinc-400 ring-1 ring-white/15 outline-none focus:ring-2 focus:ring-cyan-300/60"
                  />
                </label>

                <label className="space-y-2">
                  <div className="text-xs font-semibold text-zinc-200">
                    Комментарий к заказу
                  </div>
                  <textarea
                    name="comment"
                    placeholder="Например: без лука, домофон не работает..."
                    className="min-h-[96px] w-full resize-none rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-400 ring-1 ring-white/15 outline-none focus:ring-2 focus:ring-cyan-300/60"
                  />
                </label>

                <button
                  type="button"
                  className={`${lebronButtonClassName} h-12 w-full`}
                  style={lebronButtonStyle}
                >
                  <span className="relative z-10">Оформить заказ</span>
                </button>
                <div className="text-xs leading-5 text-zinc-300">
                  Нажимая «Оформить заказ», ты соглашаешься на обработку данных.
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="pt-10 text-sm text-zinc-400">
          <div className="flex flex-col gap-3 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Pololo</div>
            <div className="flex gap-6">
              <a className="hover:text-zinc-200" href="#menu">
                Меню
              </a>
              <a className="hover:text-zinc-200" href="#order">
                Заказать
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
