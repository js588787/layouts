const cryptoPaymentMethods = [{
  title: "Cryptomus",
  code: "cryptomus",
  commission: "0.5%",
  min_amount: 100,
  description: "Зачисление до 1 часа",
  sort_order: 1
}];

const exchangepaymentMethods = [{
    title: "Картой РФ",
    code: "card",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 2
  },
  {
    title: "Картой МИР",
    code: "mir",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 3
  },
  {
    title: "СБП",
    code: "sbp",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 4
  },
  {
    title: "Payeer",
    code: "payeer",
    commission: "5%",
    min_amount: 30,
    description: "Зачисление до 6 минут\u003Cbr\u003EЭта платежная система не принимает платежи из стран:\u003Cbr\u003EАрмения, Белоруссия, Казахстан, Киргизия",
    sort_order: 5
  },
  {
    title: "SteamPay",
    code: "steampay",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 6
  },
  {
    title: "Мегафон",
    code: "megafon",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 7
  },
  {
    title: "Билайн",
    code: "beeline",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 8
  },
  {
    title: "Теле2",
    code: "tele2",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 9
  },
  {
    title: "PayPal",
    code: "paypal",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 10
  },
  {
    title: "Stripe",
    code: "stripe",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 11
  },
  {
    title: "FKWallet",
    code: "fkwallet",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 12
  },
  {
    title: "Lava",
    code: "lava",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 13
  },
  {
    title: "Volet",
    code: "volet",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 14
  },
  {
    title: "PerfectMoney",
    code: "perfectmoney",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 15
  },
  {
    title: "Другой",
    code: "other",
    commission: "8%",
    min_amount: 100,
    description: "Зачисление до 1 часа",
    sort_order: 16
  },
];

export const RESPONSE_MOCK = {
    success: true,
    data: {
      default_currency: "RUB",
      currencies: {
        "CRYPTO": cryptoPaymentMethods,
        "RUB": exchangepaymentMethods,
        "USD": exchangepaymentMethods,
        "EUR": exchangepaymentMethods,
        "BYN": exchangepaymentMethods,
        "KZT": exchangepaymentMethods,
        "AZN": exchangepaymentMethods,
        "UZS": exchangepaymentMethods,
        "UAH": exchangepaymentMethods,
        "KRW": exchangepaymentMethods,
        "INR": exchangepaymentMethods,
        "IDR": exchangepaymentMethods,
      }
    }
  };