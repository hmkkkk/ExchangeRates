using Microsoft.AspNetCore.Authentication;
using Microsoft.Azure.Functions.Worker;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ZadanieRekrutacyjneInsERT.Core.Interfaces;
using ZadanieRekrutacyjneInsERT.Infrastructure.Data;
using ZadanieRekrutacyjneInsERT.Server.Clients;

var sqlConn = Environment.GetEnvironmentVariable("DefaultConnection");

var host = new HostBuilder()
    .ConfigureFunctionsWebApplication()
    .ConfigureServices(services =>
    {
        services.AddApplicationInsightsTelemetryWorkerService();
        services.ConfigureFunctionsApplicationInsights();
        services.AddSingleton<INBPClient, NBPClient>();
        services.AddDbContext<DataContext>(o => o.UseSqlServer(sqlConn));
    })
    .Build();

host.Run();
