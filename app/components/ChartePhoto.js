import Link from 'next/link';
import Image from 'next/image';

export default function imagetexte() {
    return (
        <div className='h-full bg-white p-14 relative'>
            <div className='text-8xl font-bold absolute top-0 w-full text-red-500'>Charte</div>
            <Image
                src="/BanderoleMutinerie.png"
                alt="Photo d'un bras levé pendant une soirée"
                width={1920}
                height={1080}
            />
            <p className='mt-8'>
                La Mutinerie est un bar et un espace festif, politique et culturel. C'est un lieu féministe par et pour les meufs, les personnes trans et les queers en général. Cette charte vise à ce que nous puissions tou.te.s nous y sentir bien. Tu n'y trouveras donc aucune vérité universelle mais des principes de base de cohabitation. Le but c'est que chacun.e fasse attention aux autres afin que chacun.e se sente bienvenu.e et inclus.e.
            </p>
            <p className='mt-5'>
                La Mutinerie est un espace de lutte collective contre toutes les discriminations liées au sexe, au genre et à la sexualité, au fait d'être racisé.e ou pas, à l'âge, à la santé, à la validité (physique et mentale), au statut sérologique, à l'origine, à la religion, à la classe, aux normes de beauté et de poids, à l'apparence et plus largement à ce que tu fais dans la vie (on pense aux travailleur.ses du sexe, aux chômeur.ses et aux genTEs au RSA).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-14">

                <div className="p-4">
                    <h2 className="text-7xl font-bold text-center">
                        Solidarité
                    </h2>
                    <p className="text-lg">
                        Si on est témoin de propos ou de gestes qui craignent, on est tou.te.s solidaires.
                        <br></br>
                        N'hésite pas à venir nous voir (derrière le bar ou à la porte) si tu as été victime ou témoin d'une situation qui t'a mis.e mal.à l'aise.
                    </p>
                </div>

                <div className="p-4">
                    <h2 className="text-7xl font-bold text-center">
                        Non-mixité
                    </h2>
                    <p className="text-lg">
                        Certains évènements sont non-mixtes. Si c'est le cas, cette non-mixité a été réfléchie par les organisateur.rices, merci de la respecter.
                    </p>
                </div>

                <div className="p-4">
                    <h2 className="text-7xl font-bold text-center">
                        Autodétermination
                    </h2>
                    <p className="text-lg">
                        A la Mutinerie, on respecte la manière dont chacun.e se définit en termes de genre, d'orientation sexuelle, etc. Avant de poser une question, demande toi si elle ne risque pas d'être intrusive pour l'autre. "T'es un garçon ou une fille ?" ou "T'es de quelle origine ?" c'est comme dire "Salut, est-ce que t'as tes papiers ?"
                    </p>
                </div>

                <div className="p-4">
                    <h2 className="text-7xl font-bold text-center">
                        Consentement
                    </h2>
                    <p className="text-lg">
                        Il arrive trop souvent qu'on (meufs/gouines/personnes trans/pédés) se fasse draguer de façon reloue et non consentie dans la vie de tout les jours.
                        <br></br>
                        A la Mutinerie, c'est la personne qui se fait draguer qui décide si c'est relou. Sois attentif.ve à la manière de réagir de la personne quand tu la dragues.
                    </p>
                </div>
            </div>
        </div>
    );
};