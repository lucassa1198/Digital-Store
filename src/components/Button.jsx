const Button = ({texto, corFundo}) => {

const style = `

${corFundo}


`;

  return (
    <>
      <button className={style}>{texto}</button>
    </>
  );
}

export default Button;