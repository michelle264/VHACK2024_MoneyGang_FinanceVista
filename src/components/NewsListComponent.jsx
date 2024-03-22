import { useState, useEffect} from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsListComponent() {
  const [newsList,setNewsList] = useState([
    { title: 'Govt has paid RM7.02 bil for LCS project to date, says defence minister',
      description: 'The government has paid a cumulative sum of RM7.02 billion for the beleaguered littoral combat ships (LCS) project to date, Defence Minister Datuk Seri Mohamed Khaled Nordin revealed in Parliament on Wednesday.',
      provider: 'TheEdge',
      datetime: '13 Mar, 2024 20:56pm',
      image:'/images/001.jpg'
    },
    {
      title: 'Malaysia launches new initiative to boost tourism sector',
      description: 'The Malaysian government has announced a new initiative aimed at boosting the country\'s tourism sector. The initiative includes various measures such as promotional campaigns, infrastructure development, and support for local businesses.',
      provider: 'Malaysia Today',
      datetime: '15 Mar, 2024 09:30am',
      image: '/images/002.jpg'
    },
    {
      title: 'New study reveals benefits of meditation for mental health',
      description: 'A recent study conducted by researchers at a leading university has revealed the significant benefits of meditation for mental health. The study found that regular meditation practice can reduce stress, anxiety, and depression, and improve overall well-being.',
      provider: 'Health News Daily',
      datetime: '14 Mar, 2024 11:45am',
      image: '/images/003.jpg'
    },
    {
      title: 'Tech giant announces plans for new AI research center in Malaysia',
      description: 'A major technology company has announced plans to establish a new artificial intelligence (AI) research center in Malaysia. The center will focus on developing cutting-edge AI technologies and fostering collaboration with local universities and research institutions.',
      provider: 'Tech Insider',
      datetime: '13 Mar, 2024 15:20pm',
      image: '/images/004.jpg'
    },
    {
      title: 'Government unveils stimulus package to support small businesses',
      description: 'The government has unveiled a new stimulus package aimed at supporting small and medium-sized enterprises (SMEs) affected by the economic downturn. The package includes financial assistance, tax incentives, and business support programs.',
      provider: 'Business Times',
      datetime: '12 Mar, 2024 14:00pm',
      image: '/images/005.jpg'
    },
    {
      title: 'New breakthrough in renewable energy technology announced',
      description: 'Scientists have announced a major breakthrough in renewable energy technology that could revolutionize the way we generate and store electricity. The new technology promises to make renewable energy sources such as solar and wind power more efficient and cost-effective.',
      provider: 'Science Today',
      datetime: '16 Mar, 2024 10:15am',
      image: '/images/006.jpg'
    },
    {
      title: 'Global leaders gather for climate change summit',
      description: 'World leaders from across the globe are gathering for a high-level summit on climate change. The summit aims to address the urgent need for action to combat climate change and its devastating effects on the environment and humanity.',
      provider: 'Climate News Network',
      datetime: '15 Mar, 2024 13:30pm',
      image: '/images/007.jpg'
    },
    {
      title: 'New study finds link between diet and mental health',
      description: 'A recent study published in a leading medical journal has found a strong link between diet and mental health. The study suggests that a healthy diet rich in fruits, vegetables, and whole grains may help reduce the risk of depression and anxiety.',
      provider: 'Medical News Today',
      datetime: '14 Mar, 2024 16:45pm',
      image: '/images/008.jpg'
    },
    {
      title: 'Space agency announces plans for manned mission to Mars',
      description: 'A leading space agency has announced ambitious plans for a manned mission to Mars. The mission, scheduled to launch in the next decade, aims to explore the red planet and lay the groundwork for future human colonization.',
      provider: 'Space Exploration News',
      datetime: '13 Mar, 2024 18:00pm',
      image: '/images/009.jpg'
    },
    {
      title: 'New breakthrough in cancer research offers hope for patients',
      description: 'Researchers have announced a groundbreaking discovery in cancer research that could lead to new treatments and improved outcomes for patients. The discovery involves a novel approach to targeting cancer cells while sparing healthy cells, potentially revolutionizing cancer therapy.',
      provider: 'Medical Breakthroughs',
      datetime: '17 Mar, 2024 09:45am',
      image: '/images/010.jpg'
    },
    {
      title: 'Global summit addresses urgent need for vaccine equity',
      description: 'Leaders from around the world are meeting for a global summit to address the urgent need for vaccine equity. The summit aims to ensure fair and equitable access to COVID-19 vaccines for all countries, particularly those in the developing world.',
      provider: 'Global Health News',
      datetime: '16 Mar, 2024 12:00pm',
      image: '/images/011.jpg'
    },
    {
      title: 'Artificial intelligence surpasses human performance in new benchmark',
      description: 'Artificial intelligence (AI) has achieved a major milestone by surpassing human performance in a new benchmark test. The achievement highlights the rapid advancement of AI technology and its potential to revolutionize various industries.',
      provider: 'AI Today',
      datetime: '15 Mar, 2024 15:30pm',
      image: '/images/012.jpg'
    },
    {
      title: 'Scientists discover new species in unexplored deep-sea trench',
      description: 'A team of scientists has discovered a new species of marine life in an unexplored deep-sea trench. The discovery underscores the importance of preserving and exploring Earth\'s oceans, which remain largely uncharted.',
      provider: 'Ocean Discovery Weekly',
      datetime: '14 Mar, 2024 18:15pm',
      image: '/images/013.jpg'
    },
    {
      title: 'New Study Reveals Benefits of Outdoor Exercise for Mental Health',
      description: 'A recent study published in a leading health journal has found that outdoor exercise can have significant benefits for mental health. The study suggests that activities such as walking, jogging, and cycling in natural environments can reduce stress, anxiety, and depression.',
      provider: 'Health & Wellness Times',
      datetime: '18 Mar, 2024 11:00am',
      image: '/images/014.jpg'
    },
    {
      title: 'Tech Company Launches Innovative Solution to Combat Cybersecurity Threats',
      description: 'A leading technology company has launched an innovative solution to combat cybersecurity threats. The new solution uses advanced artificial intelligence algorithms to detect and prevent cyber attacks, helping organizations protect their sensitive data and networks.',
      provider: 'Cybersecurity Insider',
      datetime: '17 Mar, 2024 14:30pm',
      image: '/images/015.jpg'
    },
    {
      title: 'International Conference Addresses Challenges of Urbanization',
      description: 'Urbanization experts and policymakers from around the world are gathering for an international conference to address the challenges of rapid urbanization. The conference aims to explore sustainable solutions for managing urban growth, improving living conditions, and addressing environmental concerns.',
      provider: 'Urban Development Today',
      datetime: '16 Mar, 2024 17:45pm',
      image: '/images/016.jpg'
    },
    {
      title: 'Researchers Develop Promising New Treatment for Alzheimer\'s Disease',
      description: 'A team of researchers has developed a promising new treatment for Alzheimer\'s disease. The treatment targets the underlying causes of the disease, slowing its progression and improving cognitive function in patients. Clinical trials have shown promising results, raising hopes for an effective treatment for Alzheimer\'s.',
      provider: 'Alzheimer\'s Research Bulletin',
      datetime: '15 Mar, 2024 20:00pm',
      image: '/images/017.jpg'
    },
    {
      title: 'New Study Finds Link Between Diet and Longevity',
      description: 'A new study published in a prestigious medical journal has found a strong link between diet and longevity. The study suggests that a healthy diet rich in fruits, vegetables, whole grains, and lean proteins can significantly increase lifespan and reduce the risk of chronic diseases.',
      provider: 'Health Insight',
      datetime: '19 Mar, 2024 09:15am',
      image: '/images/018.jpg'
    },
    {
      title: 'Investors Flock to Renewable Energy Sector Amid Climate Crisis',
      description: 'Investors are increasingly turning their attention to the renewable energy sector amid growing concerns about the climate crisis. Renewable energy companies are seeing a surge in investment as governments around the world ramp up efforts to transition to clean energy sources.',
      provider: 'Green Finance Gazette',
      datetime: '18 Mar, 2024 12:30pm',
      image: '/images/019.jpg'
    },
    {
      title: 'Scientists Discover New Species in Remote Rainforest',
      description: 'A team of scientists has discovered a new species of plant in a remote rainforest previously unexplored by researchers. The discovery highlights the importance of preserving biodiversity and protecting fragile ecosystems from deforestation and habitat destruction.',
      provider: 'Nature News',
      datetime: '17 Mar, 2024 15:45pm',
      image: '/images/020.jpg'
    },
    {
      title: 'Government Unveils Plan to Combat Plastic Pollution',
      description: 'The government has unveiled a comprehensive plan to combat plastic pollution and reduce plastic waste. The plan includes measures such as banning single-use plastics, promoting recycling and composting, and investing in innovative solutions to plastic pollution.',
      provider: 'Environmental Watch',
      datetime: '16 Mar, 2024 18:00pm',
      image: '/images/021.jpg'
    }
  ])
  const [isSmallScreen, setIsSmallScreen] = useState(false)
 
  const handleResize = () => {
    if (window.innerWidth < 800) {
        setIsSmallScreen(true)
    } else {
        setIsSmallScreen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  
  return (
    <div className="w_cardContainer">
        <h1>News</h1>
        <Stack gap={3}>
            {newsList.map((news, index) => (
                <Card className="w_cardBody">
                  <Stack direction={isSmallScreen ? "vertical":"horizontal"} gap={10}>
                    <div className="p-2">
                      <Card.Body>
                        <Card.Title className="w_cardTitle">{news.title}</Card.Title>
                        <Card.Text>{news.description}</Card.Text>
                        <Card.Text>{news.provider}</Card.Text>
                        <Card.Text>{news.datetime}</Card.Text>
                        <Button variant="link" >View More</Button>
                      </Card.Body>
                    </div>
                    <div className={"p-2"}>
                      <Card.Img className='w_newsImgs' src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                  </Stack>
                </Card>
            ))}
        
        </Stack>
    </div>
  );
}

export default NewsListComponent;