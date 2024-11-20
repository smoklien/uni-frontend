import GoodsCard from './GoodsCard';

const GoodsGallery = () => {
  const goods = [
    {
      photo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.watchnation.com%2Fwp-content%2Fuploads%2F2017%2F10%2F62487371.jpg&f=1&nofb=1&ipt=7e6c63082a8b439f8b3963969eb70b5cff99d3bd5d3c157528263fbf8611ea96&ipo=images',
      name: 'Classic Watch',
      price: 99.99,
    },
    {
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2500x2500%2FBeats_900_00009_01_Wireless_Headphones_Black_882187.jpg&f=1&nofb=1&ipt=6bbe6f9c2f1da49793aa9c9657d979f9a2e877130e1c24dcb2f4ae6f77e94cdb&ipo=images',
      name: 'Wireless Headphones',
      price: 129.99,
    },
    {
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2500x2500%2Fpolaroid_9062_now_instant_film_camera_1732997.jpg&f=1&nofb=1&ipt=3a0a33160d5ed871e808558c202433e7a3638b573b703a61df88c7bee75569cb&ipo=images',
      name: 'Vintage Camera',
      price: 349.99,
    },
    {
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2500x2500%2FRazer_rz03_00800100_r3u1_Deathstalker_Gaming_Keyboard_902215.jpg&f=1&nofb=1&ipt=cf93592fc0770a765ec0682f317d1fdbb6e0f2bd9c92da6a79c09848aab5f988&ipo=images',
      name: 'Gaming Keyboard',
      price: 79.99,
    },
    {
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.ldlc.com%2Fld%2Fproducts%2F00%2F04%2F65%2F15%2FLD0004651580_2.jpg&f=1&nofb=1&ipt=bf791da82a370079e73d474563662d992482bb21c9154e8d9bb7cb9bf85c4415&ipo=images',
      name: 'Smartphone',
      price: 699.99,
    },
    {
      photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.bigcartel.com%2Fproduct_images%2F271330169%2F11071125952_1180834914.jpg%3Fauto%3Dformat%26fit%3Dmax%26w%3D2000&f=1&nofb=1&ipt=b1ea1607b3513346922974230e07a6f473c3f048065e88db7c90788b76809353&ipo=images',
      name: 'Leather Backpack',
      price: 119.99,
    },
  ]

  return (
    <div className='goods-gallery-container'>
      <h1 className='heading'>Goods Gallery</h1>
      <div className='goods-gallery'>
        {goods.map((item, index) => (
          <GoodsCard
            key={index}
            photo={item.photo}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default GoodsGallery;
