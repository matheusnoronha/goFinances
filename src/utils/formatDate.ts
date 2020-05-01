const formatDate = (value: string): string => {
  const date = Date.parse(value);
  return new Intl.DateTimeFormat('pt-BR').format(date);
};
export default formatDate;
