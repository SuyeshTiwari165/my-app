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
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Sanatan Dharma / Hinduism
                </h3>
                
                <br></br>
                <p className="m-0">
                  During the Indian and Nepalese festival of Holi, people consume bhang which contains cannabis flowers. According to one description, when the amrita (elixir of life) was produced from the churning of the ocean by the devas and the asuras, Shiva created cannabis from his own body to purify the elixir (whence, for cannabis, the epithet angaja or “body-born”). Another account suggests that the cannabis plant sprang up when a drop of the elixir dropped on the ground. Thus, cannabis is used by sages due to association with elixir and Shiva. Wise drinking of bhang, according to religious rites, is believed to cleanse sins, unite one with Shiva and avoid the miseries of hell in the future life. It is also believed to have medicinal benefits. In contrast, foolish drinking of bhang without rites is considered a sin.
                </p>
                <br></br>
                <p className="m-0">
                  Although cannabis is regarded as an illegal drug, many Nepalese people consume it during festivals (like Shivaratri) which the government tolerates to some extent and also for their personal uses and recreation purposes. Further in Nepal its seeds are also used in making pickles “bhang ko achar”. The dried seeds are ground and then mixed with aalo (potato). This is common in hilly area like Kathmandu, Pokhara of Nepal.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Islam
                </h3>
                <br></br>
                <p className="m-0">
                  The Quran does not directly forbid cannabis; however, cannabis is deemed to be khamr (an intoxicant) by many religious scholars and therefore generally believed to be haraam (forbidden). A hadith by the prophet Mohammed states: “If much intoxicates, then even a little is haraam.” Despite these prohibitions, cannabis is consumed in many parts of the Islamic world, even sometimes in a religious context particularly within the Sufi mystic movement. In 1378 Soudoun Sheikouni, the Emir of the Joneima in Arabia, prohibited cannabis, considered one of the world’s first-attested cannabis bans.
                </p>
                <br></br>
                <p className="m-0">
                  The Sufi tradition attributes the discovery of cannabis to Jafar Sharazi (Sheikh Haydar), a Sufi leader in the 12th century. Other Sufis attribute its origin to the apocryphal Khidr (“Green Man”).Some modern Islamic leaders state that medical cannabis, but not recreational, is permissible in Islam. Imam Mohammad Elahi in Dearborn Heights, United States, declared: “Obviously, smoking Cannabis for fun is wrong… It should be permissible only if that is the only option in a medical condition prescribed by medical experts.” Though the argument has not been accepted by mainstream scholars, some writers have theorized that cannabis may have been used ritually in early Judaism, though these claims “have been widely dismissed as erroneous”. Sula Benet (1967) claimed that the plant kaneh bosm קְנֵה-בֹשֶׂם mentioned five times in the Hebrew Bible, and used in the holy anointing oil of the Book of Exodus, was in fact cannabis, although lexicons of Hebrew and dictionaries of plants of the Bible such as by Michael Zohary (1985), Hans Arne Jensen (2004) and James A. Duke (2010) and others identify the plant in question as either Acorus calamus or Cymbopogon citratus.
                </p>
                <br></br>
                <p className="m-0">
                 In the modern era, Orthodox rabbi Moshe Feinstein stated in 1973 that cannabis was not permitted under Jewish law, due to its harmful effects. However Orthodox rabbis Efraim Zalmanovich (2013) and Chaim Kanievsky (2016) stated that medical, but not recreational, cannabis is kosher.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Sikhism
                </h3>
                <br></br>
                <p className="m-0">
                  Early Sikh military history was dominated by the Nihang, who are known for theirvictories where they were heavily outnumbered.Some Nihang groups consume      cannabis or bhang to help in meditation. Sukhnidhaan or Sukha parsad, “peace-giver”,is the term Nihang use to refer to it.At Takht Sachkhand Shri Hazoor Sahib, (one of the five seats of power in the Sikh Panth) the ‘Sukhnidhaan’ is offered as a holy food.
                </p>
                <br></br>
                <p className="m-0">
                  There is description of ‘Sukhnidhaan’ on many pages of the book ‘Sooraj Prakaash’.  Generally, ‘Bhang’ (from Cannabis plant) is called ‘Sukhnidhaan, but seeing condemnation of ‘Bhaang’ in the Gurbaani and in the Panthic ‘Sikh Rehat Maryada’, those in favour for the consumption of Bhaang have named it ‘Sukhnidhaan’, instead of ‘Bhaang’.
                </p>
                <br></br>
                <p className="m-0">
                  In his book ‘Sri Hazoori Maryada Prabodh’, Singh Sahib Bhai Joginder Singh Ji, then the “chief priest” of Takht Sachkhand Sri Hazoor Sahib, has expressed his views about ‘Bhaang’ under the heading of ‘Sukhnidhaan De Bhog Baare’ (page 257 to 264). He wrote that all the ‘Maryada’, which is being followed at Takht Sahib, is ‘Puraatan’ (old) tradition. Supporting the arguments of Sukhnidhaan in the book, the high priest wrote about the following details: According to the ‘Janamsakhi Bhai Bala’, the Mughul King ‘Babur’ offered ‘Bhang’ to Shri Guru Nanak Dev Ji. Delighted on this, it is claimed that Shri Guru Nanak Dev Ji granted him the boon to have the kingdom for seven generations. Guru Ji recited a ‘Shabad’ (divine hymn) on this occasion, in which it is argued he did not condemn ‘Bhaang’. On the other hand, when Yogi Jhangar Naath offered a cup of wine to Guru Nanak Dev Ji, Guru Ji recited a ‘Shabad’, in which drinking wine and alcohol was condemned.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                Taoism
                </h3>
                <br></br>
                <p className="m-0">
                  Beginning around the 4th century, Taoist texts mentioned using cannabis in censers. Needham cited the (ca. 570 AD) Taoist encyclopedia Wushang Biyao 無上秘要 (“Supreme Secret Essentials”) that cannabis was added into ritual incense-burners, and suggested the ancient Taoists experimented systematically with “hallucinogenic smokes”. The Yuanshi shangzhen zhongxian ji 元始上真眾仙記 (“Records of the Assemblies of the Perfected Immortals”), which is attributed to Ge Hong (283-343), says: For those who begin practicing the Tao it is not necessary to go into the mountains. … Some with purifying incense and sprinkling and sweeping are also able to call down the Perfected Immortals. The followers of the Lady Wei and of Hsu are of this kind.
                </p>
                <br></br>
                <p className="m-0">
                  Lady Wei Huacun 魏華存 (252-334) and Xu Mi 許謐 (303-376) founded the Taoist Shangqing School. The Shangqing scriptures were supposedly dictated to Yang Xi 楊羲 (330-386 AD) in nightly revelations from immortals, and Needham proposed Yang was “aided almost certainly by cannabis”. The Mingyi bielu 名醫別錄 (“Supplementary Records of Famous Physicians”), written by the Taoist pharmacologist Tao Hongjing (456-536), who also wrote the first commentaries to the Shangqing canon, says, “Hemp-seeds (麻勃) are very little used in medicine, but the magician-technicians (shujia 術家) say that if one consumes them with ginseng it will give one preternatural knowledge of events in the future.” A 6th-century AD Taoist medical work, the Wuzangjing 五臟經 (“Five Viscera Classic”) says, “If you wish to command demonic apparitions to present themselves you should constantly eat the inflorescences of the hemp plant.”
                </p>
                <br></br>
                <p className="m-0">
                  Joseph Needham connected myths about Magu, “the Hemp Damsel”, with early Daoist religious usages of cannabis, pointing out that Magu was goddess of Shandong’s sacred Mount Tai, where cannabis “was supposed to be gathered on the seventh day of the seventh month, a day of seance banquets in the Taoist communities.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Buddhism
                </h3>
                <br></br>
                <p className="m-0">
                  n Buddhism, the Fifth Precept is frequently interpreted to mean “refrain from intoxicating drinks and drugs which lead to heedlessness”, although in some direct translations, the Fifth Precept refers specifically to alcohol. Cannabis and some other psychoactive plants are specifically prescribed in the Mahākāla Tantra for medicinal purposes.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Modern
                </h3>
                <br></br>
                <p className="m-0">
                  Smoking Cannabis was once viewed as an act of political dissidence against the Vietnam War, and looking back at the history of what President Nixon was doing at the time, one can rightfully conclude that one of the reasons Cannabis was so heavily targeted was to get rid of the hippies.
                </p>
                <br></br>
                <p className="m-0">
                  Cannabis became the fulcrum in the social battle of the day, and the U.S. government sought a means to take certain types of individuals out of society, and what better way than to arrest them and put them in jail? As noted by Gedde:“[Cannabis has] been vilified all along. For what reasons? Maybe it does too much. It does have the psychoactivity, so people can change how they think and question things. When we look at cannabis overall, Cannabis and hemp combined … all the different cannabinoids in there, we know that it’s excellent medicine.
                </p>
                <br></br>
                <p className="m-0">
                  We know that it’s popular recreationally, which of course competes with the alcohol industry. Hemp also provides excellent biofuel. It actually competes with the petroleum industry. It provides excellent fiber for clothing. It competes with lumber, which is one of the reasons apparently why hemp was restricted earlier in the 20th century. Medicine, recreation, food, fuel and fiber. What else can do all those things? It’s excellent food. Hemp oil has essential fatty acids. It’s high-quality oil and it has high-quality protein. You can actually live on hemp seeds.”
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  On Entering the Medical Cannabis System
                </h3>
                <br></br>
                <p className="m-0">
                  Gedde was trained in the idea that molecular biology will provide us with all the answers we need. By understanding the details of how cells work, we’ll be able to design a cure for every disease. However, once she found herself actually working inside the pharmaceutical industry, seeing how decisions were made, she came to realize the flaws of the system.
                </p>
                <br></br>
                <p className="m-0">
                  The fact of the matter is, drug companies have the legal mandate to turn a handsome profit. This in and of itself can create situations where profits are placed ahead of actual medical benefits. Moreover, when a company selects a product to develop, that product is not necessarily what is most needed. It’s the thing that will make the most money. “I realized there are non-pharmaceutical, non-patentable, more holistic and supportive options, such as … nutritional support, hormone balancing and neurotransmitter support. Instead of taking Prozac, how about some 5-Hydroxytryptophan (5-HTP)? Those are things that naturopathic and alternative physicians are so familiar with and work with. That was not at all part of conventional medical practice. Certainly not the way I was trained. It was an epiphany. It was kind of a turning point in my career. It was a big thing to leave the pharmaceutical industry and open my first alternative practice,” Gedde says.
                </p>
                <br></br>
                <p className="m-0">
                  She opened her medical practice in 2004, but it wasn’t until 2009 that she began realizing the usefulness of cannabis. Initially, she learned from patients who were using it. They would tell her about how it helped heal their various ailments. Eventually she began researching it on her own, discovering the human endocannabinoid system in the process — a biological system not touched upon in medical school. “When I started hearing the results patients were getting, I realized that the reason why [Cannabis] could do so many different things in the body without being toxic is because it is acting through this natural endocannabinoid system in our bodies. That’s when I said ‘Wow. This is huge. There’s nothing like this in medicine. There’s nothing that I can prescribe that comes close to what this can do for people.’” In 2010, she made the decision to focus on medical cannabis full-time — a decision she ascribes to careful deliberation of what actually helps patients the most.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  The Endocannabinoid System
                </h3>
                <br></br>
                <p className="m-0">
                  The human endocannabinoid system — endo meaning “within” — strongly suggests the human organism is actually designed to make good use of the cannabis plant. In other words, the Cannabis plant triggers something that’s been inside us since the dawn of mankind. The endocannabinoid system exists in other mammals as well, suggesting it is a truly an ancient biological system.
                </p>
                <br></br>
                <p className="m-0">
                  The cannabis plant makes cannabinoids, also known as phytocannabinoids or plant cannabinoids. This encompasses both CBD and THC, the latter of which is the psychoactive ingredient. In all, there are about 60 different cannabinoids in the cannabis plant, and medicinally, several of them are used. You also make cannabinoids inside your own body. So far, two major ones have been identified and studied since the early ’90s.
                </p>
                <br></br>
                <p className="m-0">
                  The endocannabinoid system was first described in a science article in “The Journal of Science” in 1992. The primary role of the endocannabinoid system — which releases human cannabinoids that interact with receptors found in virtually all tissues in the body — is to bring balance (homeostasis) to tissues and biological systems.
                </p>
                <br></br>
                <p className="m-0">
                  Essentially, the endocannabinoid system plays a key regulatory role in the human body. For example, there are endocannabinoid receptors in the nervous system, where cannabinoids are made locally on demand. What this means is that, in your nervous system, you have sending nerve cells and receiving nerve cells, and the endocannabinoid system works with those cells to maintain balance.
                </p>
                <br></br>
                <p className="m-0">
                  For example, if the receiving nerve cell becomes too excited, you end up with a seizure. Seizures are due to uncontrolled electrical activity in the neurons. It’s an overstimulated state. The endocannabinoid receptor detects this overstimulation and, on demand, makes human cannabinoids to dial down the sending impulses, thereby balancing the system.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                Cannabinoids Benefit Your Entire Body
                </h3>
                <br></br>
                <p className="m-0">
                  By bringing tissues back into balance, cannabinoids can reduce pain, nerve stimulation causing seizures, and muscle spasm. They also help you relax and improve sleep. “[The endocannabinoid system] is a very key system. It totally makes sense why Cannabis can do so many different things. It affects the mind. It affects the emotions. It affects the body on multiple levels. That’s the THC. CBD does that as well. CBD has multiple targets in the body. The system seems very complex. There are multiple receptors.
                </p>
                <br></br>
                <p className="m-0">
                  It’s not known how CBD acts. It acts in a different way from THC. There’s much to research. But this is a very rich system, and it’s very involved in our other body systems. Those who write about this and report on it in the scientific literature frequently said that if this were being looked at for the first time, it would be in all the headlines. ‘Hail. There’s an incredible boon to mankind.’ Because it can actually work through this natural system and do so many things without being toxic.
                </p>
                <br></br>
                <p className="m-0">
                  So many pain medications are damaging to the stomach, to the gut. The cannabis doesn’t hurt the gut. It helps heal the gut. People are so relieved … There’s nothing else that does that. It won’t hurt the organs. It won’t hurt the liver. It won’t hurt the kidneys. Ibuprofen … people can’t stay on that for months and years. They can stay on cannabis. As we know as well, there is no known lethal dose for cannabis, whether it’s THC or CBD. A person couldn’t die from it even if they were trying really, really hard. There’s nothing you can say that about. It offers so much to people on a medical level.”
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Cannabis Has Self-Limiting Effects
                </h3>
                <br></br>
                <p className="m-0">
                  There is no fatal toxicity associated with cannabis. As noted by Gedde, the effects of THC and CBD are both dose-dependent. They have a bell-shaped response curve, which means there’s a sweet spot where you get the benefit without any adverse effects. For THC, small, appropriate doses are relaxing and settle the stomach.
                </p>
                <br></br>
                <p className="m-0">
                  Too high a dose of THC will trigger anxiety. It can also cause nausea, confusion and/or disorientation. In severe cases, you might not know where or who you are. Temporary psychosis can also occur on high doses of THC. However, these effects are temporary and will resolve once the drug wears off. Such side effects are actually helpful in that they cause cannabis use to become self-limiting. People don’t want to feel terrible, so excessive doses are automatically discouraged by creating adverse reactions. Opiates, on the other hand, has no such feedback mechanism. People who take too high a dose simply die in a very relaxed state.
                </p>
                <br></br>
                <p className="m-0">
                  “With opiates, there’s no point at which a person says, ‘This is terrible. I don’t want to do this.’ There always needs to be more. With cannabis, it does have that self-limiting effect,” Gedde says. “We work closely with patients on the dosing. Less works; you want to start with lower. Because it is an oily medication and it does interact with the body in a different way, the cannabis can build up in the fatty tissues over time. We get this build-up effect that’s very beneficial …
                </p>
                <br></br>
                <p className="m-0">
                  We explain this to patients to say, ‘You could start at a certain dose. As you take that same dose day after day, it’s going to build up for three to four weeks, so you could wait and see where the build-up effect gets you before you go to the next level.’ That’s, again, so that they’re not using more than they need, not having extra side effects … The biggest thing we warn about is too-high doses of THC that would cause impairment and a very uncomfortable or unhappy experience.”
                </p>
              </div>
            </div>

            <div className="split-item">
              <div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Benefits of Cannabis and Specific Cannabinoids
                </h3>
                <br></br>
                <p className="m-0">
                  As mentioned, CBD has no psychoactive activity, and has a long list of medicinal uses. It’s an excellent muscle relaxer, easing spasms and pain. For this use, it can be applied topically, although edible versions tend to provide the deepest and most long-lasting relaxation and pain relief.
                </p>
                <br></br>
                <p className="m-0">
                  THC is famous for settling nausea associated with chemotherapy. According to Gedde, there’s really nothing a doctor can prescribe that’s as effective as THC for nausea. It also helps improve digestive function. For this reason, THC is particularly valuable for digestive disorders such as colitis and inflammatory bowel disease (IBD).
                </p>
                <br></br>
                <p className="m-0">
                  Cannabis has been shown to help glaucoma by reducing the intraocular pressure. It also helps normalize blood pressure, although that’s not a valid medical indication for medical cannabis use in Colorado. As noted by Gedde: “When you combine the body relaxation and the mental shifts — people talk about just being able to relax, it brings the stress down — this probably is part of how it helps blood pressure … But it does help normalize blood pressure so people are able to reduce their pills. That’s actually one of the real cautions I do tell people about. If they’re on blood pressure medication and they add the cannabis, their blood pressure can actually go too low. I alert them to peel back the blood pressure medications …”
                </p>
                <br></br>
                <p className="m-0">
                  Seizures are a classic indication of use, but you need to be very careful with the dosing when treating seizures. Gedde has found that CBD tends to be more difficult to use for seizures than THC, as too much CBD will exacerbate the seizures. HIV and cancer are other indications for use, as cannabis helps with sleep, nausea, pain and immune support, and has anti-tumor activity.
                </p>
                <br></br>
                <p className="m-0">
                  “The ones that aren’t on the qualifying conditions list in Colorado would include the more psychological diagnosis. THC can induce anxiety if the dose is wrong or the strain is not compatible with that person. [Still], many use THC to relieve anxiety. Because we have hundreds of different strains of Cannabis and cannabis, each of which is slightly different, there is a huge potential to customize [the drug] for each person.
                </p>
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