import React,{useState} from 'react';
import Cardp from './components/card';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Banner from './components/banner';
import Slider from "@material-ui/core/Slider";
import Footer from'./components/footer';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },  
}));

function App(){
  const classes = useStyles();
  const[open, setOpen]=React.useState(false);
  const[typeSelected,setTypeSelected]=useState("Todos")
  const[search, setSearch]=useState("");
  const[types, setTypes]=useState(["Grass", "Poison", "Fire", "Water", "Flying", "Bug", "Normal"]);
  const[power, setPower]=useState(30);
  const[name, setName]=useState("Orlando Rodriguez");
  const[pokemons, setPokemons]=useState([{
        "id": 1,
        "name": {
          "english": "Bulbasaur",
          "japanese": "フシギダネ",
          "chinese": "妙蛙种子",
          "french": "Bulbizarre"
        },
        "type": [
          "Grass",
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "base": {
          "HP": 45,
          "Attack": 49,
          "Defense": 49,
          "Sp. Attack": 65,
          "Sp. Defense": 65,
          "Speed": 45
        }
      },
      {
        "id": 2,
        "name": {
          "english": "Ivysaur",
          "japanese": "フシギソウ",
          "chinese": "妙蛙草",
          "french": "Herbizarre"
        },
        "type": [
          "Grass",
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "base": {
          "HP": 60,
          "Attack": 62,
          "Defense": 63,
          "Sp. Attack": 80,
          "Sp. Defense": 80,
          "Speed": 60
        }
      },
      {
        "id": 3,
        "name": {
          "english": "Venusaur",
          "japanese": "フシギバナ",
          "chinese": "妙蛙花",
          "french": "Florizarre"
        },
        "type": [
          "Grass",
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "base": {
          "HP": 80,
          "Attack": 82,
          "Defense": 83,
          "Sp. Attack": 100,
          "Sp. Defense": 100,
          "Speed": 80
        }
      },
      {
        "id": 4,
        "name": {
          "english": "Charmander",
          "japanese": "ヒトカゲ",
          "chinese": "小火龙",
          "french": "Salamèche"
        },
        "type": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "base": {
          "HP": 39,
          "Attack": 52,
          "Defense": 43,
          "Sp. Attack": 60,
          "Sp. Defense": 50,
          "Speed": 65
        }
      },
      {
        "id": 5,
        "name": {
          "english": "Charmeleon",
          "japanese": "リザード",
          "chinese": "火恐龙",
          "french": "Reptincel"
        },
        "type": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        "base": {
          "HP": 58,
          "Attack": 64,
          "Defense": 58,
          "Sp. Attack": 80,
          "Sp. Defense": 65,
          "Speed": 80
        }
      },
      {
        "id": 6,
        "name": {
          "english": "Charizard",
          "japanese": "リザードン",
          "chinese": "喷火龙",
          "french": "Dracaufeu"
        },
        "type": [
          "Fire",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "base": {
          "HP": 78,
          "Attack": 84,
          "Defense": 78,
          "Sp. Attack": 109,
          "Sp. Defense": 85,
          "Speed": 100
        }
      },
      {
        "id": 7,
        "name": {
          "english": "Squirtle",
          "japanese": "ゼニガメ",
          "chinese": "杰尼龟",
          "french": "Carapuce"
        },
        "type": [
          "Water"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "base": {
          "HP": 44,
          "Attack": 48,
          "Defense": 65,
          "Sp. Attack": 50,
          "Sp. Defense": 64,
          "Speed": 43
        }
      },
      {
        "id": 8,
        "name": {
          "english": "Wartortle",
          "japanese": "カメール",
          "chinese": "卡咪龟",
          "french": "Carabaffe"
        },
        "type": [
          "Water"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        "base": {
          "HP": 59,
          "Attack": 63,
          "Defense": 80,
          "Sp. Attack": 65,
          "Sp. Defense": 80,
          "Speed": 58
        }
      },
      {
        "id": 9,
        "name": {
          "english": "Blastoise",
          "japanese": "カメックス",
          "chinese": "水箭龟",
          "french": "Tortank"
        },
        "type": [
          "Water"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "base": {
          "HP": 79,
          "Attack": 83,
          "Defense": 100,
          "Sp. Attack": 85,
          "Sp. Defense": 105,
          "Speed": 78
        }
      },
      {
        "id": 10,
        "name": {
          "english": "Caterpie",
          "japanese": "キャタピー",
          "chinese": "绿毛虫",
          "french": "Chenipan"
        },
        "type": [
          "Bug"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "base": {
          "HP": 45,
          "Attack": 30,
          "Defense": 35,
          "Sp. Attack": 20,
          "Sp. Defense": 20,
          "Speed": 45
        }
      },
      {
        "id": 11,
        "name": {
          "english": "Metapod",
          "japanese": "トランセル",
          "chinese": "铁甲蛹",
          "french": "Chrysacier"
        },
        "type": [
          "Bug"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        "base": {
          "HP": 50,
          "Attack": 20,
          "Defense": 55,
          "Sp. Attack": 25,
          "Sp. Defense": 25,
          "Speed": 30
        }
      },
      {
        "id": 12,
        "name": {
          "english": "Butterfree",
          "japanese": "バタフリー",
          "chinese": "巴大蝶",
          "french": "Papilusion"
        },
        "type": [
          "Bug",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "base": {
          "HP": 60,
          "Attack": 45,
          "Defense": 50,
          "Sp. Attack": 90,
          "Sp. Defense": 80,
          "Speed": 70
        }
      },
      {
        "id": 13,
        "name": {
          "english": "Weedle",
          "japanese": "ビードル",
          "chinese": "独角虫",
          "french": "Aspicot"
        },
        "type": [
          "Bug",
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        "base": {
          "HP": 40,
          "Attack": 35,
          "Defense": 30,
          "Sp. Attack": 20,
          "Sp. Defense": 20,
          "Speed": 50
        }
      },
      {
        "id": 14,
        "name": {
          "english": "Kakuna",
          "japanese": "コクーン",
          "chinese": "铁壳蛹",
          "french": "Coconfort"
        },
        "type": [
          "Bug",
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        "base": {
          "HP": 45,
          "Attack": 25,
          "Defense": 50,
          "Sp. Attack": 25,
          "Sp. Defense": 25,
          "Speed": 35
        }
      },
      {
        "id": 15,
        "name": {
          "english": "Beedrill",
          "japanese": "スピアー",
          "chinese": "大针蜂",
          "french": "Dardargnan"
        },
        "type": [
          "Bug",
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        "base": {
          "HP": 65,
          "Attack": 90,
          "Defense": 40,
          "Sp. Attack": 45,
          "Sp. Defense": 80,
          "Speed": 75
        }
      },
      {
        "id": 16,
        "name": {
          "english": "Pidgey",
          "japanese": "ポッポ",
          "chinese": "波波",
          "french": "Roucool"
        },
        "type": [
          "Normal",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        "base": {
          "HP": 40,
          "Attack": 45,
          "Defense": 40,
          "Sp. Attack": 35,
          "Sp. Defense": 35,
          "Speed": 56
        }
      },
      {
        "id": 17,
        "name": {
          "english": "Pidgeotto",
          "japanese": "ピジョン",
          "chinese": "比比鸟",
          "french": "Roucoups"
        },
        "type": [
          "Normal",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "base": {
          "HP": 63,
          "Attack": 60,
          "Defense": 55,
          "Sp. Attack": 50,
          "Sp. Defense": 50,
          "Speed": 71
        }
      },
      {
        "id": 18,
        "name": {
          "english": "Pidgeot",
          "japanese": "ピジョット",
          "chinese": "大比鸟",
          "french": "Roucarnage"
        },
        "type": [
          "Normal",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "base": {
          "HP": 83,
          "Attack": 80,
          "Defense": 75,
          "Sp. Attack": 70,
          "Sp. Defense": 70,
          "Speed": 101
        }
      },
      {
        "id": 19,
        "name": {
          "english": "Rattata",
          "japanese": "コラッタ",
          "chinese": "小拉达",
          "french": "Rattata"
        },
        "type": [
          "Normal"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        "base": {
          "HP": 30,
          "Attack": 56,
          "Defense": 35,
          "Sp. Attack": 25,
          "Sp. Defense": 35,
          "Speed": 72
        }
      },
      {
        "id": 20,
        "name": {
          "english": "Raticate",
          "japanese": "ラッタ",
          "chinese": "拉达",
          "french": "Rattatac"
        },
        "type": [
          "Normal"
        ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "base": {
          "HP": 55,
          "Attack": 81,
          "Defense": 60,
          "Sp. Attack": 50,
          "Sp. Defense": 70,
          "Speed": 97
        }
      }]
  );

  function valuetext(value) {
    return `${value}HP`;
  }
  
  const cambiarPoder = (e, valor) => {
    console.log(e);
    setPower(valor);
  };

  const handleChange=(e)=>{
    setSearch(e.target.value)
   // console.log(search)
  }

  const handleTypeSelect=(e)=>{
    setTypeSelected(e.target.value)
    //console.log(typeSelected)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


 //FILTRO POR TIPO USANDO EL SELECT E INPUT
  const selectPokemons=()=>{

    //Filtramos el arreglo de pokemones
    let list=pokemons.filter((pokemon)=>{
       return typeSelected==="Todos" || power===0? true 
       :pokemon.type.includes(typeSelected)}).filter((pokemon)=>{
          return pokemon.name.english.includes(search)}).filter((pokemon)=>{return pokemon.base.HP>=power}).map(pokemon=>{
            return(
                <Cardp
                  key={pokemon.id}
                  nameEng={pokemon.name.english}
                  nameJap={pokemon.name.japanese}
                  image={pokemon.sprite}
                  hp={pokemon.base.HP}
                  attack={pokemon.base.Attack}
                  defense={pokemon.base.Defense}
                  speed={pokemon.base.Speed}
                  types={pokemon.type}
                />
              );
          })
          console.log(list)
    return list  
  }
     
    return (
      <div className="container">
        <Banner banner="https://1.bp.blogspot.com/-lqlDoE-cGpg/XbUSgC3u5iI/AAAAAAAAMN0/DY325tfmE38iV2YYuQsSigPBZ7fK8VjNACLcBGAsYHQ/s1600/Mewtwo_Pokemon_Sword_Shield_Banner_Image.jpg"/>
        <h4>Encuentra el pokemon</h4>
        <div className="filtros">
            <div className="filters slider">
                <p>Arrastra el slider</p>
                <h5>HP min:{power}</h5>
                <Slider
                  defaultValue={power}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={30}
                  max={83}
                  onChange={cambiarPoder}
                />
            </div>
            <div className="filters">
                <Button className={classes.button} onClick={handleOpen}>
                  Click aquí pokemon
                </Button>
            </div>
            <div className="filters">
                  <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Escoge el tipo</InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          value={typeSelected}
                          onChange={handleTypeSelect}
                        >
                          <MenuItem key={0} value="Todos">
                            <em>Todos</em>
                          </MenuItem>
                            {
                              types.map((type,index)=>{
                                return(
                                  <MenuItem key={index+1} value={type}>{type}</MenuItem>
                                )
                              })
                            }
                        </Select>
                  </FormControl>
            </div>
            <div className="filters">
                  <form className={classes.root} noValidate autoComplete="off">
                      <TextField id="outlined-search"
                      label="Por nombre..." 
                      type="search" 
                      variant="outlined"
                      value={search}
                      onChange={handleChange}
                      />
                </form>
            </div>
        </div>
        
        <div className="App">
             {selectPokemons()}
        </div>
        <div className="footer">
          <Footer title={"Estudiante Academlo: "+name}/>
        </div>
    </div>
      
    );
  
}

export default App;



