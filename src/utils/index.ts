export const toCurrency = (value: number | undefined, curr: string, LanguageFormat = undefined) => 
    !value ? "" : Intl.NumberFormat(LanguageFormat, {
        style: 'currency',
        currency: curr,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
