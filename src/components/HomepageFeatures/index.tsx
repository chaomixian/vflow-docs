import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '可视化编辑器',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        通过拖拽和点击，像搭积木一样构建你的自动化流程。
        无需编写代码，轻松创建复杂的自动化任务。
      </>
    ),
  },
  {
    title: '高度模块化',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        每个功能都是一个独立的模块（点击、查找文本、判断等），
        易于维护和扩展，支持自定义模块开发。
      </>
    ),
  },
  {
    title: '动态数据流',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        模块的输出可以作为后续模块的输入（魔法变量），
        实现复杂的逻辑联动，让工作流更智能。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
