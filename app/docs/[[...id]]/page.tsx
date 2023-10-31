import styles from './styles.module.css'

const DocsPage = ({ params }) => {
  console.log(params);
  
  return <div className={styles.title}>Docs Page</div>
}

export default DocsPage