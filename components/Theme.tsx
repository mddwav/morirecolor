type ThemeProps = {
  children: React.ReactNode;
};

export default function Theme({ children }: ThemeProps) {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
