export function calculate(formula: string): number
{
    try
    {
        return eval(formula);
    }
    catch (e)
    {
        return NaN;
    }
}