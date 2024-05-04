using AutoMapper;
using ZadanieRekrutacyjneInsERT.Server.Dtos;
using ZadanieRekrutacyjneInsERT.Core.Dtos;

namespace ZadanieRekrutacyjneInsERT.Server.Profiles
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<NBPExchangeRateDto, ExchangeRateDto>();
        }
    }
}
