using AutoMapper;
using ZadanieRekrutacyjneInsERT.Server.Dtos;
using ZadanieRekrutacyjneInsERT.Core.Dtos;
using ZadanieRekrutacyjneInsERT.Core.Entities;

namespace ZadanieRekrutacyjneInsERT.Server.Profiles
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<NBPExchangeRateDto, ExchangeRate>();
            CreateMap<ExchangeRate, ExchangeRateDto>();
        }
    }
}
