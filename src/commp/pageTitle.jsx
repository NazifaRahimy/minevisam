// components/PageTitle.js
import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => {
  const fullTitle = `${title} - مینویسم`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
