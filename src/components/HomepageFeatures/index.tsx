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
    description: <></>,
  },
  {
    id: 'square',
    title: 'Approved by',
    Svg: require('@site/static/img/square-imagotype.svg').default,
    description: <></>,
  },
  {
    id: 'react',
    title: 'Powered by',
    Svg: require('@site/static/img/react-logo.svg').default,
    description: <></>,
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
