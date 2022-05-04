// Dependencies
import * as React from 'react';
import clsx from 'clsx';

// Internals
import styles from './styles.module.css';

type FeatureItem = {
  id: string;
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    id: 'seeed',
    title: 'Created by',
    Svg: require('@site/static/img/seeed-imagotype.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
        quickly.
      </>
    ),
  },
  {
    id: 'square',
    title: 'Approved by',
    Svg: require('@site/static/img/square-imagotype.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{' '}
        <code>docs</code> directory.
      </>
    ),
  },
  {
    id: 'react',
    title: 'Powered by',
    Svg: require('@site/static/img/react-logo.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    ),
  },
];

function Feature({ id, title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.containerItem)}>
      <h3 className={styles.title}>{title}</h3>

      <div className="text--center">
        <Svg className={clsx(styles.featureSvg, id !== 'react' && styles.featureSvgFull)} role="img" />
      </div>
      <div className="text--center">
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
