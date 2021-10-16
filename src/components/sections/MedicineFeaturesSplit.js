import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>

            <div className="split-item">
              <div >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  About Cannabis
                  </h3>
                <p className="m-0">
                  Cannabis, called má (meaning “hemp; cannabis; numbness”) or dàmá (with “big; great”) in Chinese, was used in Taiwan for fiber starting about 10,000 years ago.The botanist Hui-lin Li wrote that in China, “The use of Cannabis in medicine was probably a very early development. Since ancient humans used hemp seed as food, it was quite natural for them to also discover the medicinal properties of the plant. “Emperor Shen-Nung, who was also a pharmacologist, wrote a book on treatment methods in 2737 BCE that included the medical benefits of cannabis. He recommended the substance for many ailments, including constipation, gout, rheumatism, and absent-mindedness. Cannabis is one of the 50 “fundamental” herbs in traditional Chinese medicine.
                </p>
                <br></br>
                <p className="m-0">
                  The Ebers Papyrus (ca. 1550 BCE) from Ancient Egypt describes medical cannabis.The ancient Egyptians used hemp (cannabis) in suppositories for relieving the pain of hemorrhoids.Surviving texts from ancient India confirm that cannabis’ psychoactive properties were recognized, and doctors used it for treating a variety of illnesses and ailments, including insomnia, headaches, gastrointestinal disorders, and pain, including during childbirth.
                </p>
                <br></br>
                <p className="m-0">
                  The Ancient Greeks used cannabis to dress wounds and sores on their horses, and in humans, dried leaves of cannabis were used to treat nose bleeds, and cannabis seeds were used to expel tapeworms. In the medieval Islamic world, Arabic physicians made use of the diuretic, antiemetic, antiepileptic, anti-inflammatory, analgesic and antipyretic properties of Cannabis sativa, and used it extensively as medication from the 8th to 18th centuries. Ayurveda says- Everything that exists can be medicine. Cannabis is no exception. It is considered the least problematic of the ‘intoxicant’ substances; a poison which can be used to great benefit by humans. It is in the tradition of the great texts of Ayurveda to approach complex and appealing substances first with pages of glowing praise followed by so many warnings and restrictions that only the most intrepid would not be daunted. This is the pattern I will follow in this article.
                </p>
              </div>
            </div>
            <div className="split-item">
              <div >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Vijaya: The Conqueror
                  </h3>
                <p className="m-0">
                  Sanskrit synonyms for cannabis imply its potency for transformation:
                </p>
                <br></br>
                <ul>
                  <li>Soother of grief</li>
                  <li>The sky flyer</li>
                  <li>The poor man’s heaven</li>
                </ul> 
                <br></br>
                <p className="m-0">
                  Vijaya or victory in conquest, and a dozen other glowing euphemisms. Cannabis Sativa is indigenous to India; the earliest known cultivation dated 900BC. The positive qualities of Cannabis facilitate conversation, encourage social relationships, support physical awareness, highlight a deep enjoyment of life, and elevate social contact, art, and pleasure above other (perhaps less important) pursuits. These characteristics allows cannabis to be very effective where depression and isolation are primary concerns. As is testified to by the prevalence of cannabis in poorer communities all over the world, cannabis proffers grace to living in adverse circumstances.
                </p>
                <br></br>
                <p className="m-0">
                  Today in India cannabis is used in spiritual practice and rituals, taken as a sacrament on specific holidays, for use on an ascetic path, as a training aid to wrestlers, and until the last century, quite broadly used medically and recreationally by various levels of society. Cannabis is found in over 80 traditional Ayurvedic formulas, several of which are available in pharmacies in India today. It is effective for:
                </p>
                <br></br>
                <ul>
                  <li>Pain</li>
                  <li>Digestive disorders</li>
                  <li>Dysentery</li>
                  <li>Sexual prowess, and a dozen other medical uses known to ancient Ayurveda.Medicinal Cannabis in World Religions</li>
                </ul> 
              </div>
             
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dashboardImg3.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;