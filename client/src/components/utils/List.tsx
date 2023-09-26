export interface IListProps<T> {
  className?: string;
  delimiter?: JSX.Element;
  list: T[];
  component: (item: T) => JSX.Element;
  keyFunc: (item: T) => number | string;
}

export default function List<T>({
  className = "",
  delimiter = <></>,
  list,
  component: Component,
  keyFunc,
}: IListProps<T>) {
  return (
    <div className={className}>
      {list.map((item, idx) => (
        <div key={keyFunc(item)}>
          {idx !== 0 && delimiter}
          {Component(item)}
        </div>
      ))}
    </div>
  );
}
